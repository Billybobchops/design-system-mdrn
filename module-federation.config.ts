import { createModuleFederationConfig } from '@module-federation/modern-js';

// REMOTE
export default createModuleFederationConfig({
    name: 'remoteDesignSystem',
    filename: 'remoteEntry.js',
    exposes: {
        './VisuallyHidden': './src/components/accessibility/VisuallyHidden.tsx',
        './CTAButton': './src/components/button/CTAButton.tsx',
        './IconButton': './src/components/button/IconButton.tsx',
        './LinkIconButton': './src/components/button/LinkIconButton.tsx',
        './PrimaryButton': './src/components/button/PrimaryButton.tsx',
        './SecondaryButton': './src/components/button/SecondaryButton.tsx',
        './SimpleButton': './src/components/button/SimpleButton.tsx',
        './Checkbox': './src/components/form/Checkbox.tsx',
        './Checkboxes': './src/components/form/Checkboxes.tsx',
        // './DatePicker': './src/components/form/DatePicker.tsx',
        // './DateProvider': './src/components/form/DateProvider.tsx',
        './Fieldset': './src/components/form/Fieldset.tsx',
        './HelperText': './src/components/form/HelperText.tsx',
        './Input': './src/components/form/Input.tsx',
        './InputMonetary': './src/components/form/InputMonetary.tsx',
        './Label': './src/components/form/Label.tsx',
        './MultiSelect': './src/components/form/MultiSelect.tsx',
        './RadioGroup': './src/components/form/RadioGroup.tsx',
        './Select': './src/components/form/Select.tsx',
        './SelectAllCheckbox': './src/components/form/SelectAllCheckbox.tsx',
        './Textarea': './src/components/form/Textarea.tsx',
        './Tab': './src/components/tabular/Tab.tsx',
        './TabList': './src/components/tabular/TabList.tsx',
        './TabPanel': './src/components/tabular/TabPanel.tsx',
        './Tabs': './src/components/tabular/Tabs.tsx',
        './TabsContext': './src/components/tabular/TabsContext.tsx',
        './Heading': './src/components/typography/Heading.tsx',
        './IconParagraph': './src/components/typography/IconParagraph.tsx',
        './Paragraph': './src/components/typography/Paragraph.tsx',
        './UnorderedList': './src/components/typography/UnorderedList.tsx',
        './Accordion': './src/components/Accordion.tsx',
        './Alert': './src/components/Alert.tsx',
        './Badge': './src/components/Badge.tsx',
        './Chip': './src/components/Chip.tsx',
        './Dialog': './src/components/Dialog.tsx',
        './Divider': './src/components/Divider.tsx',
        './FeatureStatus': './src/components/FeatureStatus.tsx',
        './Footer': './src/components/Footer.tsx',
        './Icon': './src/components/Icon.tsx',
        './InlineLink': './src/components/InlineLink.tsx',
        './ProgressIndicator': './src/components/ProgressIndicator.tsx',
    },
    shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
    },
});

// HOST
// export default createModuleFederationConfig({
//     name: 'host',
//     remotes: {
//         remote: 'remote@http://localhost:3006/mf-manifest.json',
//     },
//     shared: {
//         react: { singleton: true },
//         'react-dom': { singleton: true },
//     },
// });
