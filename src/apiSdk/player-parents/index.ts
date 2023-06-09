import axios from 'axios';
import queryString from 'query-string';
import { PlayerParentInterface, PlayerParentGetQueryInterface } from 'interfaces/player-parent';
import { GetQueryInterface } from '../../interfaces';

export const getPlayerParents = async (query?: PlayerParentGetQueryInterface) => {
  const response = await axios.get(`/api/player-parents${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPlayerParent = async (playerParent: PlayerParentInterface) => {
  const response = await axios.post('/api/player-parents', playerParent);
  return response.data;
};

export const updatePlayerParentById = async (id: string, playerParent: PlayerParentInterface) => {
  const response = await axios.put(`/api/player-parents/${id}`, playerParent);
  return response.data;
};

export const getPlayerParentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/player-parents/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePlayerParentById = async (id: string) => {
  const response = await axios.delete(`/api/player-parents/${id}`);
  return response.data;
};
