import type { APIRoute } from 'astro';
import { bios } from '../../i18n';

export const GET: APIRoute = () =>
  new Response(`Podoroж\n\n${bios.en.full}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
