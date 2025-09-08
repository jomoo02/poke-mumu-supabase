import NatureIntro from '../features/nature/components/nature-intro';
import NatureEffect from '../features/nature/components/nature-effect';
import NatureSystem from '../features/nature/components/nature-system';

import IntroSection from '../features/nature-2/components/intro-section';
import EffectSection from '../features/nature-2/components/effect-section';
import SystemSection from '../features/nature-2/components/nature-system';

export default function Page() {
  return (
    <div className="max-w-screen min-h-screen mx-auto lg:flex relative mt-8 mb-20 pb-20">
      <div className="hidden xl:block min-w-40 w-40" />
      <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-5 md:px-7">
        <h1 className="my-4 text-slate-900 text-3xl font-bold">포켓몬 성격</h1>
        <IntroSection />
        {/* <NatureEffect /> */}
        {/* <NatureSystem /> */}
        <EffectSection />
        <SystemSection />
      </div>

      <div className="min-w-36 w-36 xl:min-w-40 xl:w-40 leading-5" />
    </div>
  );
}
