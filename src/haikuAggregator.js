// currently mimiking the functionality of a service and an api
import misc from './haiku/haiku';
import shiki from './haiku/masaoka-shiki';
import soseki from './haiku/natsume-soseki';

function mergeData() {
  let mergedData = misc.concat(shiki, soseki);
  return mergedData;
}

export default mergeData;