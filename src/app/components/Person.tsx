const getWeekday = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());

}

type Props = {

    name:string;
    avatar?:string;
    roles:string[];

}
export const Person = ({ name,
     avatar = 'https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-default-avatar-image_2237212.jpg ' ,
      roles
    }:Props) => {

    return(
        <>
        <h1 style={{color: 'red', fontSize: '30px'}}>{name}- {getWeekday()}</h1>
        <img src={avatar} 
        alt={name}
        className="w-34 h-34"
        />
        <ul>
            <li>Ceo</li>
            <li>Bilionario</li>
        </ul>
        </>
    );
}