import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import { Gallery } from '@/gallery/Gallery';

const Index = () => (
    <div>
        <Helmet title="Starling UI Design System" />
        <main>
            <Gallery />
        </main>
    </div>
);

export default Index;
