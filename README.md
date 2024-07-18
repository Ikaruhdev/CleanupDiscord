# Discord Bot Command - Message Deletion

Este repositório contém um comando para um bot Discord que permite a exclusão em massa de mensagens em um canal específico.

## Autor

- **og.Ikaruh**
- **Instagram:** [prazericaro_](https://www.instagram.com/prazericaro)
- **Servidor de Suporte:** [Discord](https://discord.gg/nWEKmqNgcS)

## Índice

1. [Descrição](#descrição)

## Descrição

Este comando permite que um bot Discord exclua um número específico de mensagens em um canal, entre 10 e 100 mensagens de uma forma super rapida sem rate-limit

```javascript
/***************************************************************************/
/*                                                                         */
/*                           Made by og.Ikaruh                             */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support : https://discord.gg/nWEKmqNgcS            */
/*                        My instagram : prazericaro                       */
/*                              Copyright: 2021                            */
/*  .:'                                  `:.                               */
/* ::'                                    `::                              */
/*:: :.                                  .: ::                             */
/* `:. `:.             .             .:'  .:'                              */
/*   `::. `::          !           ::' .::'                                */
/*      `::.`::.    .' ! `.    .::'.::'                                    */
/*        `:.  `::::'':!:``::::'   ::'                                     */
/*        :'*:::.  .:' ! `:.  .:::*`:                                      */
/*       :: HHH::.   ` ! '   .::HHH ::                                     */
/*      ::: `H TH::.  `!'  .::HT H' :::                                    */
/*      ::..  `THHH:`:   :':HHHT'  ..::                                    */
/*      `::      `T: `. .' :T'      ::'                                    */
/*        `:. .   :         :   . .:'                                      */
/*          `::'               `::'                                        */
/*            :'  .`.  .  .'.  `:                                          */
/*            :' ::.       .:: `:                                          */
/*            :' `:::     :::' `:                                          */
/*             `.  ``     ''  .'                                           */
/*              :`...........':                                            */
/*              ` :`.     .': '                                            */
/*               `:  `"""'  :'                                             */
/***************************************************************************/
const discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (message.deletable) message.delete();
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 10 || deleteCount > 100) return
    message.channel
        .fetchMessages({
            limit: deleteCount
        })
        .then(message => message.forEach(m => m.delete().catch(error => { console.log(error) })));
}
