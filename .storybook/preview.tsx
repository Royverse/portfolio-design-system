import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';
import { ECOSYSTEM_PROJECTS, DEFAULT_PROJECT_ID } from '../src/tokens/projects';
import React, { useEffect } from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color|theme|accent)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0A0A0A' },
        { name: 'deep', value: '#050508' },
        { name: 'surface', value: '#141414' },
      ],
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
        ],
      },
    },
  },
  globalTypes: {
    projectTheme: {
      name: 'Project Theme',
      description: 'Switch between the 14 Roy Mootsana ecosystem projects',
      defaultValue: DEFAULT_PROJECT_ID,
      toolbar: {
        icon: 'paintbrush',
        items: Object.values(ECOSYSTEM_PROJECTS).map((p) => ({
          value: p.id,
          title: p.name,
          right: p.category,
        })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const activeId = context.globals.projectTheme || DEFAULT_PROJECT_ID;
      const project = ECOSYSTEM_PROJECTS[activeId] || ECOSYSTEM_PROJECTS[DEFAULT_PROJECT_ID];

      useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--project-theme-color', project.themeColor);
        root.style.setProperty('--project-accent-color', project.accentColor);
        root.style.setProperty('--project-bg-color', project.bgColor);
        root.style.setProperty('--project-surface-bg', project.surfaceBg);
        root.style.setProperty('--project-text-color', project.textColor);
        root.style.setProperty('--project-muted-color', project.mutedColor);
        root.style.setProperty('--project-border-color', project.borderColor);
        root.style.setProperty('--project-glow-color', project.glowColor);
        root.style.setProperty('--project-font', project.fontFamily);
        root.style.setProperty('--project-display-font', project.displayFont);
      }, [project]);

      return (
        <div
          data-project-id={project.id}
          data-surface-style={project.surfaceStyle}
          style={{
            padding: '24px',
            minHeight: '100vh',
            boxSizing: 'border-box',
            backgroundColor: project.bgColor,
            color: project.textColor,
            fontFamily: project.fontFamily,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 10px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              backgroundColor: project.tagBg,
              color: project.tagColor,
              border: `1px solid ${project.themeColor}33`,
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: project.themeColor,
              }}
            />
            {project.name} · {project.category}
          </div>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
