import {
  Briefcase, Handshake, Landmark, TrendingUp, Gavel, Users, Building2, Receipt, Lightbulb,
  ShieldCheck, Lock, Zap, RefreshCcw, Search, Scale, HeartHandshake, Plane, HardHat, PlugZap,
  CreditCard, Construction, Stethoscope, Factory, Clapperboard, Pickaxe, Fuel, PiggyBank,
  Server, Sun, ShoppingBag, Ship, Cpu, RadioTower, Truck, Wheat, GraduationCap, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "corporate-commercial": Briefcase,
  "mergers-acquisitions": Handshake,
  "banking-finance": Landmark,
  "capital-markets": TrendingUp,
  "dispute-resolution": Gavel,
  "employment-labour": Users,
  "real-estate-property": Building2,
  tax: Receipt,
  "intellectual-property": Lightbulb,
  "regulatory-compliance": ShieldCheck,
  "data-protection-cyber-security": Lock,
  "energy-natural-resources-infrastructure": Zap,
  "restructuring-insolvency": RefreshCcw,
  "investigations-white-collar-crime": Search,
  "antitrust-competition": Scale,
  "private-wealth-family": HeartHandshake,
  aviation: Plane,
  construction: HardHat,
  "energy-utilities": PlugZap,
  "financial-services-fintech": CreditCard,
  "infrastructure-projects": Construction,
  "life-sciences-healthcare": Stethoscope,
  "manufacturing-industrials": Factory,
  "media-sports-entertainment": Clapperboard,
  "mining-minerals": Pickaxe,
  "oil-gas": Fuel,
  "private-equity-venture-capital": PiggyBank,
  "real-estate-data-centres": Server,
  "renewable-energy": Sun,
  "retail-ecommerce-consumer-goods": ShoppingBag,
  "shipping-maritime": Ship,
  "technology-ai-digital-assets": Cpu,
  telecommunications: RadioTower,
  "transport-logistics": Truck,
  "agriculture-food": Wheat,
  "education-public-sector-non-profit": GraduationCap,
};

export function AreaIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = map[slug] ?? Scale;
  return <Icon className={className} strokeWidth={1.4} />;
}
