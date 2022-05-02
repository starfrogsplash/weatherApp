import {iconMappings} from '../utils/iconMappings'
interface Icons {
    iconId: number
    iconUrl?: string
}

const Icon = ({ iconId, iconUrl }: Icons) => {
  const fileName = `icons/${iconMappings[iconId]}`;
  return (
    <object data={fileName} type="image/svg+xml" data-testid='123'>
      <img src={iconUrl}></img>
    </object>
  );
};

export { Icon };
