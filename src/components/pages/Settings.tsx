/**
 * Settings Page Component Module
 * 
 * Provides user preferences and accessibility settings including theme customization,
 * UI density options, font size controls, and accessibility features.
 * 
 * @module components/pages/Settings
 */

import React from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Palette, Moon, Sun, Zap, Type, Eye, Contrast } from "lucide-react";

/**
 * Settings Page Component
 * 
 * @description Main page component for managing user preferences and settings.
 * Includes theme options (light/dark/auto), accent color selection, UI density,
 * font size controls, and accessibility features.
 * 
 * @returns {JSX.Element} Settings page with theme and accessibility options
 * 
 * @example
 * ```tsx
 * import { Settings } from './components/pages/Settings';
 * 
 * <Settings />
 * ```
 * 
 * @remarks
 * - Theme mode selection (Light, Dark, Auto)
 * - Accent color customization
 * - UI density options (Compact, Standard, Comfortable)
 * - Font size slider
 * - Accessibility toggles (High Contrast, Reduce Motion, etc.)
 * - Display preferences management
 */
export function Settings(): JSX.Element {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Settings</h1>
        <p className="text-[var(--dashboard-text-muted)]">Theme & Accessibility Preferences</p>
      </div>

      {/* Theme Options */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
            <Palette className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <h2 className="tracking-tight text-[var(--dashboard-text-primary)]">Theme Options</h2>
            <p className="text-sm text-[var(--dashboard-text-muted)]">Customize the appearance of your dashboard</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Mode Selection */}
          <div>
            <Label className="text-sm mb-3 block">Mode</Label>
            <RadioGroup defaultValue="dark" className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-lg border border-[var(--dashboard-border)] hover:border-[var(--dashboard-text-muted)] transition">
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-[var(--dashboard-text-muted)]" />
                  <div>
                    <div className="text-sm text-[var(--dashboard-text-primary)]">Light Mode</div>
                    <div className="text-xs text-[var(--dashboard-text-muted)]">Clean and bright interface</div>
                  </div>
                </div>
                <RadioGroupItem value="light" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-green-500/20 bg-green-500/5 transition">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm text-[var(--dashboard-text-primary)]">Dark Mode</div>
                    <div className="text-xs text-[var(--dashboard-text-muted)]">Easier on the eyes, reduces strain</div>
                  </div>
                </div>
                <RadioGroupItem value="dark" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-[var(--dashboard-border)] hover:border-[var(--dashboard-text-muted)] transition">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[var(--dashboard-text-muted)]" />
                  <div>
                    <div className="text-sm text-[var(--dashboard-text-primary)]">Auto</div>
                    <div className="text-xs text-[var(--dashboard-text-muted)]">Matches system preferences</div>
                  </div>
                </div>
                <RadioGroupItem value="auto" />
              </div>
            </RadioGroup>
          </div>

          {/* Accent Color */}
          <div>
            <Label className="text-sm mb-3 block">Accent Color</Label>
            <div className="grid grid-cols-4 gap-3">
              <button className="aspect-square rounded-lg border-2 border-green-500 bg-green-500/20 hover:scale-105 transition flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-green-500"></div>
              </button>
              <button className="aspect-square rounded-lg border border-[var(--dashboard-border)] bg-blue-500/10 hover:border-blue-500/50 hover:scale-105 transition flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
              </button>
              <button className="aspect-square rounded-lg border border-[var(--dashboard-border)] bg-purple-500/10 hover:border-purple-500/50 hover:scale-105 transition flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-purple-500"></div>
              </button>
              <button className="aspect-square rounded-lg border border-[var(--dashboard-border)] bg-orange-500/10 hover:border-orange-500/50 hover:scale-105 transition flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-orange-500"></div>
              </button>
            </div>
          </div>

          {/* UI Density */}
          <div>
            <Label className="text-sm mb-3 block">UI Density</Label>
            <RadioGroup defaultValue="standard" className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-[var(--dashboard-border)] hover:border-[var(--dashboard-text-muted)] transition cursor-pointer">
                <RadioGroupItem value="compact" className="mb-2" />
                <div className="text-sm text-[var(--dashboard-text-primary)]">Compact</div>
                <div className="text-xs text-[var(--dashboard-text-muted)] text-center">Dense layout</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-green-500/20 bg-green-500/5 cursor-pointer">
                <RadioGroupItem value="standard" className="mb-2" />
                <div className="text-sm text-[var(--dashboard-text-primary)]">Standard</div>
                <div className="text-xs text-[var(--dashboard-text-muted)] text-center">Balanced spacing</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-[var(--dashboard-border)] hover:border-[var(--dashboard-text-muted)] transition cursor-pointer">
                <RadioGroupItem value="comfortable" className="mb-2" />
                <div className="text-sm text-[var(--dashboard-text-primary)]">Comfortable</div>
                <div className="text-xs text-[var(--dashboard-text-muted)] text-center">Spacious layout</div>
              </div>
            </RadioGroup>
          </div>

          {/* Font Size */}
          <div>
            <Label className="text-sm mb-3 block">Font Size</Label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input 
                  type="range" 
                  min="0" 
                  max="2" 
                  defaultValue="1" 
                  className="w-full h-2 bg-[var(--dashboard-border)] rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>
              <div className="flex gap-2 text-sm text-[var(--dashboard-text-muted)]">
                <span>Small</span>
                <span>•</span>
                <span className="text-[var(--dashboard-text-primary)]">Medium</span>
                <span>•</span>
                <span>Large</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Accessibility Options */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
            <Eye className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <h2 className="tracking-tight text-[var(--dashboard-text-primary)]">Accessibility Options</h2>
            <p className="text-sm text-[var(--dashboard-text-muted)]">Enhance usability and readability</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* High Contrast Mode */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-[var(--dashboard-border)]">
            <div className="flex items-center gap-3">
              <Contrast className="w-5 h-5 text-[var(--dashboard-text-muted)]" />
              <div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">High Contrast Mode</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">Increases visibility of UI elements</div>
              </div>
            </div>
            <Switch />
          </div>

          {/* Reduce Motion */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-[var(--dashboard-border)]">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[var(--dashboard-text-muted)]" />
              <div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Reduce Motion</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">Minimizes animations and transitions</div>
              </div>
            </div>
            <Switch />
          </div>

          {/* Color-blind Friendly */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-[var(--dashboard-border)]">
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-[var(--dashboard-text-muted)]" />
              <div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Color-blind Friendly Palette</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">Uses accessible color combinations</div>
              </div>
            </div>
            <Switch />
          </div>

          {/* Larger Click Targets */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-[var(--dashboard-border)]">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-[var(--dashboard-text-muted)]" />
              <div>
                <div className="text-sm text-[var(--dashboard-text-primary)]">Larger Click Targets</div>
                <div className="text-xs text-[var(--dashboard-text-muted)]">Increases button and link sizes</div>
              </div>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Additional Settings */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-4 text-[var(--dashboard-text-primary)]">Display Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[var(--dashboard-text-primary)]">Show sidebar tooltips</div>
              <div className="text-xs text-[var(--dashboard-text-muted)]">Display labels when sidebar is collapsed</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[var(--dashboard-text-primary)]">Enable smooth scrolling</div>
              <div className="text-xs text-[var(--dashboard-text-muted)]">Smooth page transitions</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[var(--dashboard-text-primary)]">Auto-save preferences</div>
              <div className="text-xs text-[var(--dashboard-text-muted)]">Remember settings across sessions</div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex gap-3">
        <Button className="bg-green-500 hover:bg-green-600 text-black">
          Save Preferences
        </Button>
        <Button variant="outline" className="border-[var(--dashboard-border)]">
          Reset to Default
        </Button>
      </div>
    </div>
  );
}