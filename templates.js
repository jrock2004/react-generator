exports.componentTemplate = (componentName) => `import { ReactElement } from 'react';

export const ${componentName} = (): ReactElement => {
  return <div data-testid="${componentName}">${componentName}</div>;
};
`;

exports.cssModuleTemplate = (componentName) => `.${componentName} {
  color: #000;
}
`;

exports.testTemplate = (componentName) => `import { render, screen } from '@testing-library/react';
import { ${componentName} } from '.';

describe('${componentName}', () => {
  it('should render correctly', () => {
    render(<${componentName} />);
    expect(screen.getByTestId('${componentName}')).toBeInTheDocument();
  });
});
`;

exports.storyTemplate = (componentName, title) => `import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ${componentName} } from '.';

export default {
  title: '${title}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args: typeof ${componentName}) => <${componentName} {...args} />;

export const Default = Template.bind({});

Default.args = {};
`;
