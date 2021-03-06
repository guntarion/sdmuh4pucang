import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'PENGANTAR',
    group: true,
  },
  /*{
    title: 'Fingerprint Analysis',
    icon: 'nb-keypad',
    link: '/pages/konsepilmiah',
  },*/
  {
    title: 'Sambutan',
    icon: 'nb-compose',
    children: [
      {
        title: 'Kepala Sekolah',
        link: '/pages/sambutan/sam-kepsek',
      },
      {
        title: 'Guru BK',
        link: '/pages/sambutan/sam-gurubk',
      },
      {
        title: 'Psikolog',
        link: '/pages/sambutan/sam-psikolog',
      },
    ],
  },
  {
    title: 'ANALISIS JAPO',
    group: true,
  },
  {
    title: 'Hemisfer Otak',
    icon: 'fa fa-suitcase',
    children: [
      {
        title: 'Konsep Hemisfer',
        link: '/pages/hasilhemisfer/konsephemisfer',
      },
      {
        title: 'Analisis Ananda',
        link: '/pages/hasilhemisfer/hasilhemisfer',
      },
    ],
  },
  {
    title: 'Modalitas Belajar',
    icon: 'fa fa-magnet',
    children: [
      {
        title: 'Konsep Modalitas',
        link: '/pages/hasilmodalitas/konsepmodalitas',
      },
      {
        title: 'Analisis Ananda',
        link: '/pages/hasilmodalitas/hasilmodalitas',
      },
    ],
  },
  {
    title: 'Kecerdasan Majemuk',
    icon: 'fa fa-language',
    children: [
      {
        title: 'Konsep Kecerdasan Laten',
        link: '/pages/hasilkecmajemuk/konsepkecmajemuk',
      },
      {
        title: 'Analisis Ananda',
        link: '/pages/hasilkecmajemuk/hasilkecmajemuk',
      },
    ],
  },
  {
    title: 'Bantuan',
    icon: 'nb-compose',
    link: '/pages/bantuan',
  },
  /*{
    title: 'DEFAULT',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',F
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editFCors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
