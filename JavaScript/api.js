// const tempObject = {
//   34: {
//     Name: 'Nekoluga',
//     Description: [
//       'Nekoluga, or rather its True Form Ultralan Pasalan, is a very niche super backline Support unit who can proc Freeze (2s, 100%) and Knockback (100%) against all non-Metal enemies from 650 standing range and a 19s attack rate. It has essentially no meaningful damage at 1700 DPS, awful survivability with 20k HP and 1 KB, and a crippling 5 minute Cooldown, relying only on its CC ability to contribute to the battle. The Evolved Form has only the Knockback ability without the Freeze proc, and is considerably less useful outside of the very early game, and like all Lugas its First Form is useless.',
//       'Ultralan\'s only "strength" is his huge standing range. This makes sure that he can provide support from a safe distance. He can control enemies by knocking them back, allowing you to reach the enemy base early, while interrupting their counterattacks with his freeze. This is situationally useful, such as in long drawn out battles against Crazed/Manic Mohawk and Eraser in the early-to-mid game, and again in their reappearances in Heavenly Tower.',
//       "Unfortunately, Ultralan's attack rate is just bad, making his Freeze uptime only around 10%, which is not enough to effectively control more aggressive enemies. Due to the irrelevance of his Freeze in most situations, in the mid-to-late game he is obsoleted by Cat God, who can do the same job but use his Omnistrike to stand 850 range away from the enemy base. He also suffers from the common Luga issue of being ridiculously fragile. One touch from an enemy and he's done for, and with an incredibly long cooldown you will likely not see him return to the battle.",
//       'In conclusion, Ultralan is barely valuable after early game Crazed/Manic stages due to awful attack rate, poor abilities and almost non-existent stats, with range being its only impressive parameter. Its abilities are ineffective in most situations and he performs worse than a no gacha alternative available in the later stages of the game.',
//     ],
//     Scores: {
//       'Overall Use': 0,
//       'Anti-Red': 0,
//       'Anti-Floating': 0,
//       'Anti-Black': 0,
//       'Anti-Angel': 0,
//       'Anti-Alien': 0,
//       'Anti-Zombie': 0,
//       'Anti-Relic': 0,
//       'Anti-White': 1,
//       'CC/Support': 0.5,
//       'Super Backliner': 0.5,
//       'Anti-Devil': -2,
//     },
//   },
// };

// const fetchData = () => {
//   return fetch("../db/db.mock.json")
//     .then((response) => response.json())
//     .then((responseJson) =>
//       Object.entries(responseJson).map(([_, value]) => value)
//     )
//     .catch((err) => {
//       alert("there's an error when trying to fetch data. See logging");
//       console.log(err);
//     });
// };
//

const fetchData = () => {
  return fetch("../db/db.mock.json")
    .then((response) => response.json())
    .then((responseJson) =>
      Object.entries(responseJson).map(([_, value]) => value)
    )
    .catch((err) => {
      alert("there's an error when trying to fetch data. See logging");
      console.log(err);
    });
};
