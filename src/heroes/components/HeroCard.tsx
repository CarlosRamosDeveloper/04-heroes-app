import { Heart, Eye, Zap, Brain, Gauge } from 'lucide-react';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Progress,
} from '@/components/ui';

interface Props {
  isActive: boolean;
  owner: string;
  isFavourite: boolean;
  alias: string;
  name: string;
  role: string;
  affiliation: string;
  description: string;
  strValue: number;
  intValue: number;
  spdValue: number;
  stmValue: number;
  powers: string[];
  firstAppeared: number;
}

export const HeroCard = ({
  isActive,
  owner,
  isFavourite,
  alias,
  name,
  role,
  affiliation,
  description,
  strValue,
  intValue,
  spdValue,
  stmValue,
  powers,
  firstAppeared,
}: Props) => {
  const ownerColor = (): string => {
    if (owner === 'DC') return 'bg-blue-600';
    if (owner === 'Marvel') return 'bg-red-600';
    return 'bg-black-500';
  };

  const roleColor = (): string => {
    if (role.toLowerCase() === 'héroe')
      return 'bg-green-100 text-green-800 border-green-200';
    if (role.toLowerCase() === 'anti-héroe')
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-black-100 text-black-800 border-white-200';
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-linear-to-br from-white to-gray-50">
      <div className="relative h-64 overflow-hidden">
        <img
          src="/placeholder.svg?height=300&width=300"
          alt="Superman"
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Status indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {/* TODO: Cambiar la luz en función de si el personaje está activo o no*/}
          <div
            className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-red-500'}`}
          />
          <Badge
            variant="secondary"
            className="text-xs bg-white/90 text-gray-700"
          >
            {isActive ? 'Activo' : 'Retirado'}
          </Badge>
        </div>

        {/* Universe badge */}
        <Badge
          className={`absolute top-3 right-3 text-xs ${ownerColor()} text-white`}
        >
          {owner}
        </Badge>

        {/* Favorite button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
        >
          <Heart
            className={`h-4 w-4 ${isFavourite ? 'fill-red-500 text-red-500' : 'text-gray-600'} `}
          />
        </Button>

        {/* View details button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-tight">{alias}</h3>
            <p className="text-sm text-gray-600">{name}</p>
          </div>
          <Badge className={`text-xs ${roleColor()}`}>{role}</Badge>
        </div>
        <Badge variant="outline" className="w-fit text-xs">
          {affiliation}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Zap className={`h-3 w-3 text-orange-500`} />
              <span className="text-xs font-medium">Fuerza</span>
            </div>
            <Progress
              value={strValue}
              className="h-2"
              activeColor={`bg-orange-500`}
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Brain className={`h-3 w-3 text-blue-500`} />
              <span className="text-xs font-medium">Inteligencia</span>
            </div>
            <Progress
              value={intValue}
              className="h-2"
              activeColor={`bg-blue-500`}
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Gauge className={`h-3 w-3 text-green-500`} />
              <span className="text-xs font-medium">Velocidad</span>
            </div>
            <Progress
              value={spdValue}
              className="h-2"
              activeColor={`bg-green-500`}
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Gauge className={`h-3 w-3 text-purple-500`} />
              <span className="text-xs font-medium">Resistencia</span>
            </div>
            <Progress
              value={stmValue}
              className="h-2"
              activeColor={`bg-purple-500`}
            />
          </div>
        </div>

        {/* Powers */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Powers:</h4>
          <div className="flex flex-wrap gap-1">
            {powers.map((power, index) => (
              <Badge
                variant="outline"
                className={`text-xs ${index === powers.length - 1 ? 'bg-gray-100' : ''} `}
              >
                {power}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-2 border-t">
          First appeared: {firstAppeared}
        </div>
      </CardContent>
    </Card>
  );
};
