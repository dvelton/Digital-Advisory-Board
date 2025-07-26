import { useState } from 'react';
import { Persona, PersonaCategory, PERSONA_CATEGORIES } from '../lib/types';
import { QUICK_TEMPLATES } from '../lib/personas';
import { PersonaCard } from './PersonaCard';
import { QuickTemplateCard } from './QuickTemplateCard';
import { CreateBoardDialog } from './CreateBoardDialog';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Search, Filter, Sparkles } from '@phosphor-icons/react';

interface PersonaLibraryProps {
  personas: Persona[];
  templates: typeof QUICK_TEMPLATES;
  onCreateBoard: (name: string, description: string, personas: Persona[]) => void;
  onLoadTemplate: (templateId: string) => void;
}

export function PersonaLibrary({ personas, templates, onCreateBoard, onLoadTemplate }: PersonaLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PersonaCategory | 'all'>('all');
  const [selectedPersonas, setSelectedPersonas] = useState<Persona[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const filteredPersonas = personas.filter(persona => {
    const matchesSearch = searchQuery === '' || 
      persona.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      persona.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      persona.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || persona.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handlePersonaSelect = (persona: Persona) => {
    setSelectedPersonas(current => {
      const isSelected = current.some(p => p.id === persona.id);
      if (isSelected) {
        return current.filter(p => p.id !== persona.id);
      } else if (current.length < 12) {
        return [...current, persona];
      }
      return current;
    });
  };

  const handleCreateBoard = (name: string, description: string) => {
    onCreateBoard(name, description, selectedPersonas);
    setSelectedPersonas([]);
    setShowCreateDialog(false);
  };

  return (
    <div className="space-y-6">
      {/* Quick Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Quick Templates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {templates.map(template => (
              <QuickTemplateCard
                key={template.id}
                template={template}
                onLoad={() => onLoadTemplate(template.id)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search personas by name, role, or expertise..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as PersonaCategory | 'all')}
            className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
          >
            <option value="all">All Categories</option>
            {Object.keys(PERSONA_CATEGORIES).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Personas Bar */}
      {selectedPersonas.length > 0 && (
        <Card className="border-accent bg-accent/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Selected Advisors ({selectedPersonas.length}/12)</h3>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setSelectedPersonas([])}>
                  Clear All
                </Button>
                <Button 
                  onClick={() => setShowCreateDialog(true)}
                  disabled={selectedPersonas.length === 0}
                >
                  Create Advisory Board
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedPersonas.map(persona => (
                <Badge key={persona.id} variant="secondary" className="px-3 py-1">
                  {persona.name} - {persona.title}
                  <button
                    onClick={() => handlePersonaSelect(persona)}
                    className="ml-2 hover:bg-destructive hover:text-destructive-foreground rounded-full p-0.5"
                  >
                    ×
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Persona Categories */}
      <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as PersonaCategory | 'all')}>
        <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          {Object.keys(PERSONA_CATEGORIES).map(category => (
            <TabsTrigger key={category} value={category} className="text-xs">
              {category.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPersonas.map(persona => (
              <PersonaCard
                key={persona.id}
                persona={persona}
                isSelected={selectedPersonas.some(p => p.id === persona.id)}
                onSelect={() => handlePersonaSelect(persona)}
                disabled={!selectedPersonas.some(p => p.id === persona.id) && selectedPersonas.length >= 12}
              />
            ))}
          </div>
        </TabsContent>

        {Object.keys(PERSONA_CATEGORIES).map(category => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPersonas
                .filter(persona => persona.category === category)
                .map(persona => (
                  <PersonaCard
                    key={persona.id}
                    persona={persona}
                    isSelected={selectedPersonas.some(p => p.id === persona.id)}
                    onSelect={() => handlePersonaSelect(persona)}
                    disabled={!selectedPersonas.some(p => p.id === persona.id) && selectedPersonas.length >= 12}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <CreateBoardDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        selectedPersonas={selectedPersonas}
        onCreateBoard={handleCreateBoard}
      />
    </div>
  );
}