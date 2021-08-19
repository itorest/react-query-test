import { useQuery } from 'react-query';
import axios from 'axios';
import ky from 'ky';
import { GitHub } from '../types';

const axiosApi = async () => {
  const res = await axios.get<{
    data: GitHub;
  }>('https://api.github.com/repos/tannerlinsley/react-query');
  return res.data;
};

const kyApi = async () => {
  const res = await ky.get('https://api.github.com/repos/tannerlinsley/react-query').json<GitHub>();
  return res;
};

export const useGitHubStars = () => useQuery('repoData', kyApi, {});
