import { useState } from 'react';
import { Persona } from '../lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface CreateBoardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPersonas: Persona[];
  onCreateBoard: (name: string, description: string) => void;
}

export function CreateBoardDialog({ 
  open, 
  onOpenChange, 
  selectedPersonas, 
  onCreateBoard 
}: CreateBoardDialogProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && selectedPersonas.length > 0) {
      onCreateBoard(name.trim(), description.trim());
      setName('');
      setDescription('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create Advisory Board</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="board-name">Board Name</Label>
            <Input
              id="board-name"
              placeholder="e.g., Product Launch Advisory Board"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="board-description">Description (Optional)</Label>
            <Textarea
              id="board-description"
              placeholder="Describe the purpose and focus of this advisory board..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          
          <div className="space-y-3">
            <Label>Selected Advisors ({selectedPersonas.length})</Label>
            <div className="max-h-64 overflow-y-auto space-y-2 p-4 border rounded-lg bg-muted/20">
              {selectedPersonas.map(persona => (
                <div key={persona.id} className="flex items-center gap-3 p-2 bg-background rounded border">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={persona.avatar} alt={persona.name} />
                    <AvatarFallback>{persona.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{persona.name}</p>
                    <p className="text-xs text-muted-foreground">{persona.title}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {persona.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!name.trim() || selectedPersonas.length === 0}>
              Create Board
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}