import { useState } from 'react';
import { AdvisoryBoard, Conversation } from '../lib/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { MessageSquare, Users, Calendar, Play } from '@phosphor-icons/react';

interface AdvisoryBoardBuilderProps {
  board: AdvisoryBoard;
  savedBoards: AdvisoryBoard[];
  conversations: Conversation[];
  onStartChat: (topic: string) => void;
  onLoadBoard: (board: AdvisoryBoard) => void;
  onSaveBoard: (board: AdvisoryBoard) => void;
}

export function AdvisoryBoardBuilder({ 
  board, 
  savedBoards, 
  conversations, 
  onStartChat, 
  onLoadBoard 
}: AdvisoryBoardBuilderProps) {
  const [chatTopic, setChatTopic] = useState('');

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatTopic.trim()) {
      onStartChat(chatTopic.trim());
      setChatTopic('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Board Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                {board.name}
              </CardTitle>
              {board.description && (
                <p className="text-sm text-muted-foreground mt-2">{board.description}</p>
              )}
            </div>
            <Badge variant="outline">
              {board.personas.length} Advisors
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {board.personas.map(persona => (
              <div key={persona.id} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={persona.avatar} alt={persona.name} />
                  <AvatarFallback>{persona.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{persona.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{persona.title}</p>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {persona.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Start New Chat */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-accent" />
            Start New Advisory Session
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleStartChat} className="space-y-4">
            <div>
              <label htmlFor="chat-topic" className="text-sm font-medium mb-2 block">
                What would you like to discuss with your advisory board?
              </label>
              <Input
                id="chat-topic"
                placeholder="e.g., Should we pivot our B2B product to B2C?"
                value={chatTopic}
                onChange={(e) => setChatTopic(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" disabled={!chatTopic.trim()} className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Start Advisory Session
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Previous Conversations */}
      {conversations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              Previous Conversations
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              {conversations.map(conversation => (
                <div key={conversation.id} className="p-3 border rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{conversation.topic}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {conversation.messages.length} messages • {new Date(conversation.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      Continue
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Saved Boards */}
      {savedBoards.length > 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-muted-foreground" />
              Other Advisory Boards
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              {savedBoards.filter(b => b.id !== board.id).map(savedBoard => (
                <div key={savedBoard.id} className="p-3 border rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{savedBoard.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {savedBoard.personas.length} advisors • Created {new Date(savedBoard.createdAt).toLocaleDateString()}
                      </p>
                      {savedBoard.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {savedBoard.description}
                        </p>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => onLoadBoard(savedBoard)}
                    >
                      Load Board
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}