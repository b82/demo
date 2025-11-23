/**
 * Design System Page Component Module
 * 
 * Showcases the SalesFlow design language, component library, color palette,
 * typography, and UI patterns. Serves as a reference guide for developers and designers.
 * 
 * @module components/pages/DesignSystem
 */

import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";

/**
 * Design System Page Component
 * 
 * @description Reference page displaying the complete design system including
 * color palette, typography, component examples, and UI patterns. Used as a
 * documentation and reference tool for the design language.
 * 
 * @returns {JSX.Element} Design system showcase page
 * 
 * @example
 * ```tsx
 * import { DesignSystem } from './components/pages/DesignSystem';
 * 
 * <DesignSystem />
 * ```
 * 
 * @remarks
 * - Displays color palette with CSS variable names
 * - Shows typography scale and examples
 * - Demonstrates all UI components
 * - Includes alert/notification examples
 * - Serves as living style guide
 */
export function DesignSystem(): JSX.Element {
  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div>
        <h1 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Design System</h1>
        <p className="text-[var(--dashboard-text-muted)]">SalesFlow design language and component library</p>
      </div>

      {/* Color Palette */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Color Palette</h2>
        
        <div className="space-y-6">
          {/* Base Colors */}
          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Base Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="h-20 rounded-lg bg-[var(--dashboard-bg)] border border-[var(--dashboard-border)] mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Background</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">var(--dashboard-bg)</div>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-[var(--dashboard-surface)] border border-[var(--dashboard-border)] mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Surface</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">var(--dashboard-surface)</div>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-[var(--dashboard-border)] border border-[var(--dashboard-text-muted)] mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Border</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">var(--dashboard-border)</div>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-[var(--dashboard-text-primary)] border border-[var(--dashboard-border)] mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Text</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">var(--dashboard-text-primary)</div>
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Accent Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div>
                <div className="h-20 rounded-lg bg-green-500 mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Primary Green</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">#22c55e</div>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-purple-500 mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Secondary Purple</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">#a855f7</div>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-blue-500 mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Info Blue</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">#3b82f6</div>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-yellow-500 mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Warning Yellow</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">#eab308</div>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-red-500 mb-2"></div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Error Red</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">#ef4444</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Typography */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Typography</h2>
        
        <div className="space-y-4">
          <div className="pb-4 border-b border-[var(--dashboard-border)]">
            <h1 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Heading 1</h1>
            <div className="text-xs text-[var(--dashboard-text-muted)]">tracking-tight</div>
          </div>
          <div className="pb-4 border-b border-[var(--dashboard-border)]">
            <h2 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Heading 2</h2>
            <div className="text-xs text-[var(--dashboard-text-muted)]">tracking-tight</div>
          </div>
          <div className="pb-4 border-b border-[var(--dashboard-border)]">
            <h3 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Heading 3</h3>
            <div className="text-xs text-[var(--dashboard-text-muted)]">tracking-tight</div>
          </div>
          <div className="pb-4 border-b border-[var(--dashboard-border)]">
            <p className="mb-1 text-[var(--dashboard-text-primary)]">Body text - The quick brown fox jumps over the lazy dog</p>
            <div className="text-xs text-[var(--dashboard-text-muted)]">Default body text</div>
          </div>
          <div className="pb-4 border-b border-[var(--dashboard-border)]">
            <p className="text-sm mb-1 text-[var(--dashboard-text-primary)]">Small text - The quick brown fox jumps over the lazy dog</p>
            <div className="text-xs text-[var(--dashboard-text-muted)]">text-sm</div>
          </div>
          <div>
            <p className="text-xs mb-1 text-[var(--dashboard-text-primary)]">Extra small text - The quick brown fox jumps over the lazy dog</p>
            <div className="text-xs text-[var(--dashboard-text-muted)]">text-xs</div>
          </div>
        </div>
      </Card>

      {/* Buttons */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Buttons</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Primary</h3>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-green-500 hover:bg-green-600 text-black">Primary Button</Button>
              <Button className="bg-green-500 hover:bg-green-600 text-black" size="sm">Small</Button>
              <Button className="bg-green-500 hover:bg-green-600 text-black" size="lg">Large</Button>
              <Button className="bg-green-500 hover:bg-green-600 text-black" disabled>Disabled</Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Secondary</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="secondary" size="sm">Small</Button>
              <Button variant="secondary" size="lg">Large</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Outline</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-[var(--dashboard-border)]">Outline Button</Button>
              <Button variant="outline" className="border-[var(--dashboard-border)]" size="sm">Small</Button>
              <Button variant="outline" className="border-[var(--dashboard-border)]" size="lg">Large</Button>
              <Button variant="outline" className="border-[var(--dashboard-border)]" disabled>Disabled</Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Ghost</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="ghost" size="sm">Small</Button>
              <Button variant="ghost" size="lg">Large</Button>
              <Button variant="ghost" disabled>Disabled</Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Destructive</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="destructive" size="sm">Small</Button>
              <Button variant="destructive" size="lg">Large</Button>
              <Button variant="destructive" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Badges */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Badges</h2>
        
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Success</Badge>
          <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Warning</Badge>
          <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Error</Badge>
          <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Info</Badge>
          <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20">Purple</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline" className="border-[var(--dashboard-border)]">Outline</Badge>
        </div>
      </Card>

      {/* Form Elements */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Form Elements</h2>
        
        <div className="space-y-6 max-w-md">
          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Input</h3>
            <Input placeholder="Enter text..." className="bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]" />
          </div>

          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Input (Focused)</h3>
            <Input placeholder="Focused state..." className="bg-[var(--dashboard-bg)] border-green-500/50" />
          </div>

          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Checkbox</h3>
            <div className="flex items-center gap-2">
              <Checkbox id="check1" />
              <label htmlFor="check1" className="text-sm text-[var(--dashboard-text-primary)]">Checkbox Label</label>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-[var(--dashboard-text-muted)] mb-3">Switch</h3>
            <div className="flex items-center gap-2">
              <Switch id="switch1" />
              <label htmlFor="switch1" className="text-sm text-[var(--dashboard-text-primary)]">Switch Label</label>
            </div>
          </div>
        </div>
      </Card>

      {/* Cards */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Cards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[var(--dashboard-bg)] border-[var(--dashboard-border)] p-4">
            <h3 className="tracking-tight mb-2 text-[var(--dashboard-text-primary)]">Standard Card</h3>
            <p className="text-sm text-[var(--dashboard-text-muted)]">This is a standard card with default styling and border.</p>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 p-4 text-black">
            <h3 className="tracking-tight mb-2">Gradient Card</h3>
            <p className="text-sm opacity-80">This card uses a gradient background for emphasis.</p>
          </Card>
        </div>
      </Card>

      {/* Icons & States */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Icons & States</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 bg-[var(--dashboard-bg)] rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <div>
              <div className="text-sm text-[var(--dashboard-text-primary)]">Success</div>
              <div className="text-xs text-[var(--dashboard-text-muted)]">Completed</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[var(--dashboard-bg)] rounded-lg">
            <AlertCircle className="w-5 h-5 text-yellow-500" />
            <div>
              <div className="text-sm text-[var(--dashboard-text-primary)]">Warning</div>
              <div className="text-xs text-[var(--dashboard-text-muted)]">Attention needed</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[var(--dashboard-bg)] rounded-lg">
            <XCircle className="w-5 h-5 text-red-500" />
            <div>
              <div className="text-sm text-[var(--dashboard-text-primary)]">Error</div>
              <div className="text-xs text-[var(--dashboard-text-muted)]">Failed</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[var(--dashboard-bg)] rounded-lg">
            <Info className="w-5 h-5 text-blue-500" />
            <div>
              <div className="text-sm text-[var(--dashboard-text-primary)]">Info</div>
              <div className="text-xs text-[var(--dashboard-text-muted)]">Information</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Spacing System */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Spacing System</h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm text-[var(--dashboard-text-muted)]">8px</div>
            <div className="h-8 bg-green-500 rounded" style={{ width: '8px' }}></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm text-[var(--dashboard-text-muted)]">16px</div>
            <div className="h-8 bg-green-500 rounded" style={{ width: '16px' }}></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm text-[var(--dashboard-text-muted)]">24px</div>
            <div className="h-8 bg-green-500 rounded" style={{ width: '24px' }}></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm text-[var(--dashboard-text-muted)]">32px</div>
            <div className="h-8 bg-green-500 rounded" style={{ width: '32px' }}></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm text-[var(--dashboard-text-muted)]">48px</div>
            <div className="h-8 bg-green-500 rounded" style={{ width: '48px' }}></div>
          </div>
        </div>
      </Card>

      {/* Border Radius */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Border Radius</h2>
        
        <div className="flex flex-wrap gap-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded mb-2"></div>
            <div className="text-xs text-[var(--dashboard-text-muted)]">8px</div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-lg mb-2"></div>
            <div className="text-xs text-[var(--dashboard-text-muted)]">rounded-lg</div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-xl mb-2"></div>
            <div className="text-xs text-[var(--dashboard-text-muted)]">rounded-xl</div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-full mb-2"></div>
            <div className="text-xs text-[var(--dashboard-text-muted)]">rounded-full</div>
          </div>
        </div>
      </Card>

      {/* Design Principles */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Design Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[var(--dashboard-bg)] rounded-lg">
            <h3 className="text-sm mb-2 text-[var(--dashboard-text-primary)]">Clarity</h3>
            <p className="text-xs text-[var(--dashboard-text-muted)]">Clear hierarchy and intuitive navigation guide users through complex data.</p>
          </div>
          <div className="p-4 bg-[var(--dashboard-bg)] rounded-lg">
            <h3 className="text-sm mb-2 text-[var(--dashboard-text-primary)]">Consistency</h3>
            <p className="text-xs text-[var(--dashboard-text-muted)]">Uniform patterns and predictable interactions create familiarity.</p>
          </div>
          <div className="p-4 bg-[var(--dashboard-bg)] rounded-lg">
            <h3 className="text-sm mb-2 text-[var(--dashboard-text-primary)]">Efficiency</h3>
            <p className="text-xs text-[var(--dashboard-text-muted)]">Streamlined workflows and quick access to critical information.</p>
          </div>
          <div className="p-4 bg-[var(--dashboard-bg)] rounded-lg">
            <h3 className="text-sm mb-2 text-[var(--dashboard-text-primary)]">Accessibility</h3>
            <p className="text-xs text-[var(--dashboard-text-muted)]">Inclusive design ensures usability for all users.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}