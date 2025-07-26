import { QUICK_TEMPLATES, getPersonaById } from '../lib/personas';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Sparkles } from '@phosphor-icons/react';

interface QuickTemplateCardProps {
  template: typeof QUICK_TEMPLATES[0];
  onLoad: () => void;
}

export function QuickTemplateCard({ template, onLoad }: QuickTemplateCardProps) {
  const personas = template.personaIds.map(id => getPersonaById(id)).filter(Boolean);

  return (
    <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              {template.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {template.description}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-3">Advisory Board ({personas.length} advisors):</h4>
          <div className="space-y-2">
            {personas.map((persona) => (
              <div key={persona?.id} className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={persona?.avatar} alt={persona?.name} />
                  <AvatarFallback className="text-xs">
                    {persona?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{persona?.name}</p>
                  <p className="text-xs text-muted-foreground">{persona?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Button onClick={onLoad} className="w-full">
          Load Template
        </Button>
      </CardContent>
    </Card>
  );
}