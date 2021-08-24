/***************************************************************************/
/*                                                                         */
/*                           Made by og.Ikaruh                           */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support : https://discord.gg/mGvMxXNPzz                */
/*                        My instagram : eoIkaruh_                         */
/*                              Copyright: 2021                            */
/*  .:'                                  `:.
 ::'                                    `::                                  
:: :.                                  .: ::
 `:. `:.             .             .:'  .:'
   `::. `::          !           ::' .::'
      `::.`::.    .' ! `.    .::'.::'
        `:.  `::::'':!:``::::'   ::'
        :'*:::.  .:' ! `:.  .:::*`:
       :: HHH::.   ` ! '   .::HHH ::
      ::: `H TH::.  `!'  .::HT H' :::
      ::..  `THHH:`:   :':HHHT'  ..::
      `::      `T: `. .' :T'      ::'
        `:. .   :         :   . .:'
          `::'               `::'
            :'  .`.  .  .'.  `:
            :' ::.       .:: `:
            :' `:::     :::' `:
             `.  ``     ''  .'
              :`...........':
              ` :`.     .': '
               `:  `"""'  :'                                                                           */
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