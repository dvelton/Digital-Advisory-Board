import { Persona } from '../lib/types';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Plus, Check } from '@phosphor-icons/react';

interface PersonaCardProps {
  persona: Persona;
  isSelected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

export function PersonaCard({ persona, isSelected, onSelect, disabled }: PersonaCardProps) {
  return (
    <Card className={`
      transition-all duration-200 hover:shadow-lg cursor-pointer
      ${isSelected ? 'ring-2 ring-accent border-accent bg-accent/5' : 'hover:border-primary/50'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={persona.avatar} alt={persona.name} />
              <AvatarFallback>{persona.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">{persona.name}</h3>
              <p className="text-xs text-muted-foreground">{persona.title}</p>
            </div>
          </div>
          <Button
            size="sm"
            variant={isSelected ? "default" : "outline"}
            onClick={onSelect}
            disabled={disabled}
            className="shrink-0"
          >
            {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Badge variant="secondary" className="text-xs">
          {persona.category}
        </Badge>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {persona.background.slice(0, 150)}...
        </p>
        
        <div>
          <h4 className="text-xs font-medium mb-2">Key Philosophies:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            {persona.keyPhilosophies.slice(0, 2).map((philosophy, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1 h-1 bg-accent rounded-full mt-2 shrink-0" />
                {philosophy}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-medium mb-2">Expertise:</h4>
          <div className="flex flex-wrap gap-1">
            {persona.expertise.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-medium mb-2">Communication Style:</h4>
          <p className="text-xs text-muted-foreground">{persona.communicationStyle}</p>
        </div>
      </CardContent>
    </Card>
  );
}