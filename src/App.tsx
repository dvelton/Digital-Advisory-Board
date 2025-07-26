import { useState } from 'react';
import { useKV } from '@github/spark/hooks';
import { Persona, AdvisoryBoard, Conversation, ChatMessage } from './lib/types';
import { PERSONAS, QUICK_TEMPLATES, getPersonaById } from './lib/personas';
import { PersonaLibrary } from './components/PersonaLibrary';
import { AdvisoryBoardBuilder } from './components/AdvisoryBoardBuilder';
import { ChatInterface } from './components/ChatInterface';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { MessageSquare, Users, Sparkles } from '@phosphor-icons/react';

function App() {
  const [savedBoards, setSavedBoards] = useKV<AdvisoryBoard[]>('advisory-boards', []);
  const [conversations, setConversations] = useKV<Conversation[]>('conversations', []);
  const [activeBoard, setActiveBoard] = useState<AdvisoryBoard | null>(null);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [activeTab, setActiveTab] = useState<'library' | 'board' | 'chat'>('library');

  const handleCreateBoard = (name: string, description: string, personas: Persona[]) => {
    const newBoard: AdvisoryBoard = {
      id: crypto.randomUUID(),
      name,
      description,
      personas,
      createdAt: new Date()
    };
    
    setSavedBoards(current => [...current, newBoard]);
    setActiveBoard(newBoard);
    setActiveTab('board');
  };

  const handleLoadTemplate = (templateId: string) => {
    const template = QUICK_TEMPLATES.find(t => t.id === templateId);
    if (!template) return;

    const personas = template.personaIds.map(id => getPersonaById(id)).filter(Boolean) as Persona[];
    const newBoard: AdvisoryBoard = {
      id: crypto.randomUUID(),
      name: template.name,
      description: template.description,
      personas,
      createdAt: new Date()
    };

    setSavedBoards(current => [...current, newBoard]);
    setActiveBoard(newBoard);
    setActiveTab('board');
  };

  const handleStartChat = (board: AdvisoryBoard, topic: string) => {
    const newConversation: Conversation = {
      id: crypto.randomUUID(),
      topic,
      messages: [],
      advisoryBoardId: board.id,
      createdAt: new Date()
    };

    setConversations(current => [...current, newConversation]);
    setActiveConversation(newConversation);
    setActiveBoard(board);
    setActiveTab('chat');
  };

  const handleSendMessage = async (content: string) => {
    if (!activeConversation || !activeBoard) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    const updatedConversation = {
      ...activeConversation,
      messages: [...activeConversation.messages, userMessage]
    };

    setConversations(current => 
      current.map(conv => 
        conv.id === activeConversation.id ? updatedConversation : conv
      )
    );
    setActiveConversation(updatedConversation);

    // Generate responses from each persona
    for (const persona of activeBoard.personas) {
      try {
        const personaPrompt = spark.llmPrompt`
You are ${persona.name}, a ${persona.title} with the following background:

${persona.background}

Key philosophies:
${persona.keyPhilosophies.map(p => `- ${p}`).join('\n')}

Typical concerns:
${persona.typicalConcerns.map(c => `- ${c}`).join('\n')}

Decision-making style: ${persona.decisionMakingStyle}
Communication style: ${persona.communicationStyle}

The user is asking your advisory board: "${content}"

Please respond as this persona would, incorporating their background, experience, and perspective. Keep your response focused and actionable (2-3 paragraphs maximum). Make sure your advice reflects your unique expertise and concerns.

Previous conversation context:
${updatedConversation.messages.slice(-5).map(msg => 
  msg.type === 'user' ? `User: ${msg.content}` : 
  `${getPersonaById(msg.personaId || '')?.name || 'Unknown'}: ${msg.content}`
).join('\n')}
        `;

        const response = await spark.llm(personaPrompt);

        const personaMessage: ChatMessage = {
          id: crypto.randomUUID(),
          type: 'persona',
          content: response,
          personaId: persona.id,
          timestamp: new Date()
        };

        setConversations(current => 
          current.map(conv => 
            conv.id === activeConversation.id 
              ? { ...conv, messages: [...conv.messages, personaMessage] }
              : conv
          )
        );

        if (activeConversation.id === updatedConversation.id) {
          setActiveConversation(current => 
            current ? { ...current, messages: [...current.messages, personaMessage] } : null
          );
        }
      } catch (error) {
        console.error(`Error generating response for ${persona.name}:`, error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Digital Advisory Board</h1>
                <p className="text-sm text-muted-foreground">Get expert perspectives from AI personas</p>
              </div>
            </div>
            {activeBoard && (
              <Card className="px-4 py-2 bg-white/60">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{activeBoard.name}</span>
                  <span className="text-xs text-muted-foreground">
                    ({activeBoard.personas.length} advisors)
                  </span>
                </div>
              </Card>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="library" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Persona Library
            </TabsTrigger>
            <TabsTrigger value="board" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Advisory Board
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2" disabled={!activeBoard}>
              <MessageSquare className="w-4 h-4" />
              Chat Session
            </TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="mt-6">
            <PersonaLibrary 
              personas={PERSONAS}
              templates={QUICK_TEMPLATES}
              onCreateBoard={handleCreateBoard}
              onLoadTemplate={handleLoadTemplate}
            />
          </TabsContent>

          <TabsContent value="board" className="mt-6">
            {activeBoard ? (
              <AdvisoryBoardBuilder 
                board={activeBoard}
                savedBoards={savedBoards}
                conversations={conversations.filter(conv => conv.advisoryBoardId === activeBoard.id)}
                onStartChat={(topic) => handleStartChat(activeBoard, topic)}
                onLoadBoard={setActiveBoard}
                onSaveBoard={(updatedBoard) => {
                  setSavedBoards(current => 
                    current.map(board => 
                      board.id === updatedBoard.id ? updatedBoard : board
                    )
                  );
                  setActiveBoard(updatedBoard);
                }}
              />
            ) : (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Advisory Board Selected</h3>
                <p className="text-muted-foreground mb-6">
                  Create a new advisory board or load a template to get started.
                </p>
                <Button onClick={() => setActiveTab('library')}>
                  Browse Persona Library
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="chat" className="mt-6">
            {activeConversation && activeBoard ? (
              <ChatInterface 
                conversation={activeConversation}
                board={activeBoard}
                onSendMessage={handleSendMessage}
              />
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Active Conversation</h3>
                <p className="text-muted-foreground mb-6">
                  Start a chat session from your advisory board to begin getting expert advice.
                </p>
                <Button 
                  onClick={() => setActiveTab('board')} 
                  disabled={!activeBoard}
                >
                  Go to Advisory Board
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;