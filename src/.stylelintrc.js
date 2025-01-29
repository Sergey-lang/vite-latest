export default {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
    rules: {
        'order/order': [
            [
                { type: 'at-rule', name: 'import' },
                { type: 'at-rule', name: 'forward' },
                { type: 'at-rule', name: 'use' },
                'dollar-variables',
                'at-variables',
                'custom-properties',
                { type: 'at-rule', name: 'custom-media' },
                { type: 'at-rule', name: 'function' },
                { type: 'at-rule', name: 'mixin' },
                { type: 'at-rule', name: 'extend' },
                'declarations',
                { type: 'at-rule', name: 'include' },
                { type: 'rule', selector: /^&::[\w-]+/, hasBlock: true },
                'rules',
                { type: 'at-rule', name: 'media', hasBlock: true },
            ],
            { severity: 'warning' },
        ],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: ['else'],
            },
        ],
        'color-named': ['never'],
        'color-function-notation': ['modern'],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'export'],
            },
        ],
        'no-descending-specificity': null,
        'property-no-vendor-prefix': [true, { ignoreProperties: ['text-size-adjust'] }],
    },
};
