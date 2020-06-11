import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Admin',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Usuários',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/e-commerce/orders',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            },
            {
                id       : 'orders',
                title    : 'Pedidos',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/e-commerce/orders',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            },
            {
                id       : 'products',
                title    : 'Meus Produtos',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/e-commerce/products',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            },
            {
                id       : 'product',
                title    : 'Editar produto',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/e-commerce/product',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            }
        ]
    },
    {
        id       : 'admin',
        title    : 'Módulo Administrativo',
        // translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Usuários',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/users',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }
];
