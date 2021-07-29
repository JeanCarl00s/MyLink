// funçoes para salvar ler e excluir os dados
import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os links salvos
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];  
    // se tiver retorna o mylinks na variavel linkSaves ou se nao tiver retorna nada. || igual a ou

    return linkSaves;
}

//salvar um link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);
    //passando todos os links salvos e colocando na variavel linkStored

    //se tiver algum link salvo com o mesmo ID / ou duplicado preciso ignorar.
    const hasLink = linksStored.some( link => link.id === newLink.id);

    if(hasLink){
        console.log('Esse link ja existe na lista')
        return; //Parar a execusaão aqui
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso !')
}

//deletar o link do storage
export async function deleteLink(links, id){
    let myLinks = links.filter( (item) => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem('sujeitolinks', JSON.stringify(myLinks));

    console.log('link deletado do storage');
    return myLinks;
}