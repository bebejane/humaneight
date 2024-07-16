import { useEffect } from "react";
import { sleep } from "next-dato-utils/utils";

function showLoading() {
  navigation.addEventListener('navigate', evt => {
    evt.intercept({
      scroll: 'manual',
      handler: (e) => sleep(5000),
    });
  }, { once: true });
  return navigation.navigate(location.href).finished;
}

const useNavigationLoader = () => {

  useEffect(() => {
    //return
    const handleClick = (e: Event) => {
      showLoading()
    }
    document.querySelectorAll('a').forEach(a => a.addEventListener('click', handleClick))

    return () => {
      document.querySelectorAll('a').forEach(a => a.removeEventListener('click', handleClick))
    }
  }, [])

}
export default useNavigationLoader