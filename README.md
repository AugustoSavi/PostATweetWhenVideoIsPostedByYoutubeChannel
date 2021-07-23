# Post a Tweet when a video is posted by a youtube channel

Projeto em nodejs que sempre que um vídeo novo for postado por um canal ele faz um post no twitter

![GitHub repo size](https://img.shields.io/github/repo-size/AugustoSavi/PostATweetWhenVideoIsPostedByYoutubeChannel?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/AugustoSavi/PostATweetWhenVideoIsPostedByYoutubeChannel?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/AugustoSavi/PostATweetWhenVideoIsPostedByYoutubeChannel?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/AugustoSavi/PostATweetWhenVideoIsPostedByYoutubeChannel?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/AugustoSavi/PostATweetWhenVideoIsPostedByYoutubeChannel?style=for-the-badge)

## 🚀 Como rodar?

primeiro pegue as credenciais [aqui](https://developer.twitter.com/) e as coloque em um aquivo .env(Use como base o .env.exemplo)

segundamente acesse o canal do youtube que vai ficar verificando e pegue o id do canal e coloque no .env tmbm
https://www.youtube.com/channel/AQUI_VAI_ESTAR_O_ID 

> no .env esta setado como padrão para a cada uma hora verificar, caso queira mudar isso altere o CHECK_INTERVAL_MS, lembrado que esse tempo deve ser em milisegundos 


```bash
# Clone o repositório
$ git clone https://github.com/AugustoSavi/PostATweetWhenVideoIsPostedByYoutubeChannel

# Entre no repositório
$ cd PostATweetWhenVideoIsPostedByYoutubeChannel

# Execute a aplicação
$  npm i && npm start
```

## 📫 Contribuindo para o repositório
consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).