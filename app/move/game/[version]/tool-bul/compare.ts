// import fetchSupa from './fetch-supa';
import { data as letsgoData } from './letsgo-data';
import data from './bul-gen7.json';

export default async function compareData() {
  // const supaData = await fetchSupa();

  return letsgoData.map((supa) => {
    const bulTarget = data.find(({ id }) => id === supa.move_id);

    if (bulTarget) {
      const nameCheck =
        bulTarget.name_en.toLowerCase() === supa.name_en.toLowerCase();
      const typeCheck = bulTarget.type.toLowerCase() === supa.type;
      const damageClassCheck =
        bulTarget.category.toLowerCase() === supa.damage_class;
      const ppCheck = bulTarget.pp === supa.pp;
      const powerCheck = bulTarget.power === supa.power;
      const accuracyCheck = bulTarget.accuracy === supa.accuracy;
      return {
        ...supa,
        nameCheck,
        typeCheck,
        damageClassCheck,
        ppCheck,
        powerCheck,
        accuracyCheck,
      };
    }
    return {
      ...supa,
      nameCheck: false,
      typeCheck: false,
      damageClassCheck: false,
      ppCheck: false,
      powerCheck: false,
      accuracyCheck: false,
    };
  });
}
