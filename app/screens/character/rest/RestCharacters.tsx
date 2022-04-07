import axios from 'axios';
import RestUrl from '../../../services/types/rest';

async function getCharacter(id) {
  try {
    let res = await axios({
      url: `${RestUrl}${id}`,
      method: 'get',
      timeout: 8000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export { getCharacter };
