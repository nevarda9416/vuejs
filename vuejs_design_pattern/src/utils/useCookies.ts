import { ref, type Ref } from 'vue';
import CookiesAdapter from "@/adapter/CookiesAdapter";
import {CookieOptions} from "@/adapter/CookiesAdapter";
export default function useCookies() {
  const cookie = new CookiesAdapter();
  const cookies: Ref<object> = ref(cookie.getAll());
  const getAll = () => {
    cookies.value = cookie.getAll();
  };
  const get = (key: string): string | undefined => {
    return cookie.get(key);
  };
  const set = (
    key: string,
    value: string,
    options: CookieOptions | undefined = undefined
  ): string | undefined => {
    const response = cookie.set(key, value, options);
    getAll();
    return response;
  };
  const remove = (key: string) => {
    cookie.remove(key);
    getAll();
  };
  return { cookies, get, set, remove };
}
