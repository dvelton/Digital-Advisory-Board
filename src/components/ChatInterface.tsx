import { useState, useRef, useEffect } from 'react';
import { Conversation, AdvisoryBoard, ChatMessage } from '../lib/types';
import { getPersonaById } from '../lib/personas';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Send, MessageSquare, User } from '@phosphor-icons/react';

interface ChatInterfaceProps {
  conversation: Conversation;
  board: AdvisoryBoard;
  onSendMessage: (content: string) => void;
}

export function ChatInterface({ conversation, board, onSendMessage }: ChatInterfaceProps) {
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || isLoading) return;

    const messageContent = newMessage.trim();
    setNewMessage('');
    setIsLoading(true);

    try {
      await onSendMessage(messageContent);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation.messages]);

  return (
    <div className="space-y-6">
      {/* Chat Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            {conversation.topic}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{conversation.messages.length} messages</span>
            <span>•</span>
            <span>{board.personas.length} advisors</span>
            <span>•</span>
            <span>Started {new Date(conversation.createdAt).toLocaleDateString()}</span>
          </div>
        </CardHeader>
      </Card>

      {/* Advisory Board Preview */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-3">
            {board.personas.map(persona => (
              <div key={persona.id} className="flex items-center gap-2 p-2 bg-muted/20 rounded-lg">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={persona.avatar} alt={persona.name} />
                  <AvatarFallback className="text-xs">
                    {persona.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{persona.name}</p>
                  <p className="text-xs text-muted-foreground">{persona.title}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Messages */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-lg">Advisory Discussion</CardTitle>
        </CardHeader>
        
        <CardContent className="p-0">
          <ScrollArea className="h-[600px] p-6">
            <div className="space-y-6">
              {conversation.messages.map((message, index) => (
                <div key={message.id} className="space-y-4">
                  {message.type === 'user' ? (
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary rounded-full">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-sm">You</span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <div className="bg-primary text-primary-foreground p-4 rounded-lg rounded-tl-none">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ) : (
                    (() => {
                      const persona = getPersonaById(message.personaId || '');
                      if (!persona) return null;
                      
                      return (
                        <div className="flex items-start gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={persona.avatar} alt={persona.name} />
                            <AvatarFallback>
                              {persona.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium text-sm">{persona.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {persona.title}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {new Date(message.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                            <div className="bg-card border p-4 rounded-lg rounded-tl-none">
                              <div className="prose prose-sm max-w-none">
                                {message.content.split('\n').map((paragraph, i) => (
                                  <p key={i} className="mb-2 last:mb-0 text-sm leading-relaxed">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200" />
                  <span className="text-sm">Advisors are thinking...</span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          {/* Message Input */}
          <div className="border-t p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="Ask your advisory board a question..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                rows={3}
                disabled={isLoading}
                className="resize-none"
              />
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  Press Enter to send, Shift+Enter for new line
                </span>
                <Button 
                  type="submit" 
                  disabled={!newMessage.trim() || isLoading}
                  className="flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send to Board
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}