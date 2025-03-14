import { Helmet } from '@modern-js/runtime/head';
import '../styles/_design-system-root.scss';

import { Gallery } from '@/gallery/Gallery';

const Index = () => (
    <div>
        <Helmet title="Design System" />
        <main>
            <Gallery />
        </main>
    </div>
);

export default Index;
