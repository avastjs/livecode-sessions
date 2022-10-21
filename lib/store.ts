import { atom } from "jotai";

export type SessionEvent = {
  title: string,
  audio_chat: string,
  is_live: boolean,
  lan : string,
  live_url: string,
  live_draw_url: string,
  project_url: string,
  tags: string[]
}

export const sessionFormAtom = atom<SessionEvent>({
  title: '',
  audio_chat: '',
  is_live: true,
  lan : 'en',
  live_url: '',
  live_draw_url: '',
  project_url: '',
  tags: []
});

export const isElectronAtom = atom(false);

export const codeAtom = atom('');

