import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type LabNavItem = {
  readonly label: string;
  readonly path: string;
  readonly area: string;
};

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell {
  protected readonly productName = signal('RenderLab');

  protected readonly navItems = signal<LabNavItem[]>([
    { label: 'Workbench', path: '/', area: 'Canvas' },
    { label: 'Layout', path: '/layout', area: 'CSS' },
    { label: 'Rendering', path: '/rendering', area: 'CRP' },
    { label: 'Loading', path: '/loading', area: 'Network' },
    { label: 'Runtime', path: '/runtime', area: 'JS Engine' },
  ]);
}
