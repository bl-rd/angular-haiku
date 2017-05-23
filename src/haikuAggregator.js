import jsonfile from 'jsonfile';
import misc from './haiku/haiku';
import sojo from './haiku/hino-sojo';
import dakotsu from './haiku/iida-dakotsu';
import tota from './haiku/kaneko-tota';
import shuson from './haiku/kato-shuson';
import hekigodo from './haiku/kawahigashi-hekigodo';
import shiki from './haiku/masaoka-shiki';
import shuoshi from './haiku/mizuhara-shuoshi';
import kijo from './haiku/murakami-kijo';
import kusatao from './haiku/nakamura-kusatao';
import soseki from './haiku/natsume-soseki';
import seisensui from './haiku/ogiwara-seisensui';
import hosai from './haiku/ozaki-hosai';
import kyoshi from './haiku/takahama-kyoshi';
import fusei from './haiku/tomiyasu-fusei';
import kakio from './haiku/tomizawa-kakio';
import seishi from './haiku/yamaguchi-seishi';

function mergeData() {
  let mergedData = misc.concat(
    sojo,
    dakotsu,
    tota,
    shuson,
    hekigodo,
    shiki,
    shuoshi,
    kijo,
    kusatao,
    soseki,
    seisensui,
    hosai,
    kyoshi,
    fusei,
    kakio,
    seishi
  );
  return mergedData;
}

function createJson(path = 'dist/haiku.json') {
  let file = path;
  let haiku = mergeData();
  jsonfile.writeFile(file, haiku, { spaces: 2}, err => console.error(err));
}

export { mergeData, createJson };