import {
  ShieldCheck, Award, Sun, GraduationCap, HeartHandshake, Compass,
  BookOpen, Baby, Users, Leaf, HeartPulse, Trophy, Palette, Languages, Brain,
  Target, Eye, Medal, CalendarDays, Pencil, Sparkles, Star,
  Check, Plus, ArrowRight, FileText, MessageCircle, Phone, Mail,
  MapPin, Navigation, Send, X, Menu,
  type LucideProps,
} from "lucide-react";

const MAP = {
  ShieldCheck, Award, Sun, GraduationCap, HeartHandshake, Compass,
  BookOpen, Baby, Users, Leaf, HeartPulse, Trophy, Palette, Languages, Brain,
  Target, Eye, Medal, CalendarDays, Pencil, Sparkles, Star,
  Check, Plus, ArrowRight, FileText, MessageCircle, Phone, Mail,
  MapPin, Navigation, Send, X, Menu,
} as const;

export type IconName = keyof typeof MAP;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
