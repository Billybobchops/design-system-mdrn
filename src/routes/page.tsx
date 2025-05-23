import { Helmet } from '@modern-js/runtime/head';
import '../styles/design-system.scss';
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
