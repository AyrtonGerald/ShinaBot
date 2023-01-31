import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*_⚠️ Responde a una imagen_*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*_⚠️ El tipo de archivo ${mime} no es correcto, recuerde que debe ser una imagen_*`
if (!text) return m.reply(`*⚠️ ¿Como usar este comando?*
▪ #phmaker (opcion) *<responder o etiquetar una imagen>*

*📌 Ejemplo:*
—◉ ${usedPrefix + command} artist_in_the_dark *<responder / etiquetar a una imagen>*

*_🍁 • LISTA DE OPCIONES_*
*┃›📝* ${usedPrefix + command} 2colors-canvas
*┃›📝* ${usedPrefix + command} 3d-wall
*┃›📝* ${usedPrefix + command} 100_dollars
*┃›📝* ${usedPrefix + command} abstract-rays
*┃›📝* ${usedPrefix + command} airbrush
*┃›📝* ${usedPrefix + command} angry_granny
*┃›📝* ${usedPrefix + command} apples
*┃›📝* ${usedPrefix + command} applying_makeup
*┃›📝* ${usedPrefix + command} aqua
*┃›📝* ${usedPrefix + command} art-admirer
*┃›📝* ${usedPrefix + command} art-experts
*┃›📝* ${usedPrefix + command} artist
*┃›📝* ${usedPrefix + command} artistic-filter
*┃›📝* ${usedPrefix + command} artist_in_the_dark
*┃›📝* ${usedPrefix + command} art_exhibition
*┃›📝* ${usedPrefix + command} art_gallery
*┃›📝* ${usedPrefix + command} art_painting
*┃›📝* ${usedPrefix + command} aruga
*┃›📝* ${usedPrefix + command} at-the-beach
*┃›📝* ${usedPrefix + command} at-the-gallery
*┃›📝* ${usedPrefix + command} aurora
*┃›📝* ${usedPrefix + command} auto-enhance
*┃›📝* ${usedPrefix + command} autumn-frame
*┃›📝* ${usedPrefix + command} ax
*┃›📝* ${usedPrefix + command} bad_santa
*┃›📝* ${usedPrefix + command} bathe
*┃›📝* ${usedPrefix + command} beauty-boost
*┃›📝* ${usedPrefix + command} behind_the_fence
*┃›📝* ${usedPrefix + command} bicycle
*┃›📝* ${usedPrefix + command} biker
*┃›📝* ${usedPrefix + command} billboard
*┃›📝* ${usedPrefix + command} billboard_workers
*┃›📝* ${usedPrefix + command} black-and-white-mural
*┃›📝* ${usedPrefix + command} black-mamba
*┃›📝* ${usedPrefix + command} black-pen
*┃›📝* ${usedPrefix + command} black-pencils
*┃›📝* ${usedPrefix + command} blueprint
*┃›📝* ${usedPrefix + command} boardings
*┃›📝* ${usedPrefix + command} bodybuilder
*┃›📝* ${usedPrefix + command} brass-frame
*┃›📝* ${usedPrefix + command} bricks
*┃›📝* ${usedPrefix + command} bride
*┃›📝* ${usedPrefix + command} bride_in_grass
*┃›📝* ${usedPrefix + command} broadway
*┃›📝* ${usedPrefix + command} brugge
*┃›📝* ${usedPrefix + command} brush-strokes
*┃›📝* ${usedPrefix + command} bubbles
*┃›📝* ${usedPrefix + command} building_painters
*┃›📝* ${usedPrefix + command} bunnies
*┃›📝* ${usedPrefix + command} bunny_ears
*┃›📝* ${usedPrefix + command} burned-bread
*┃›📝* ${usedPrefix + command} burning-fire
*┃›📝* ${usedPrefix + command} cafe
*┃›📝* ${usedPrefix + command} canvas
*┃›📝* ${usedPrefix + command} cappuccino
*┃›📝* ${usedPrefix + command} captivity
*┃›📝* ${usedPrefix + command} card-with-flowers
*┃›📝* ${usedPrefix + command} cartoon
*┃›📝* ${usedPrefix + command} cartoonizer
*┃›📝* ${usedPrefix + command} castle
*┃›📝* ${usedPrefix + command} champagne
*┃›📝* ${usedPrefix + command} che-guevara
*┃›📝* ${usedPrefix + command} chinese_opera
*┃›📝* ${usedPrefix + command} christmass_tree_balls
*┃›📝* ${usedPrefix + command} chris_pirillo
*┃›📝* ${usedPrefix + command} cinema
*┃›📝* ${usedPrefix + command} circle-of-colors
*┃›📝* ${usedPrefix + command} city-billboard
*┃›📝* ${usedPrefix + command} city
*┃›📝* ${usedPrefix + command} citylight
*┃›📝* ${usedPrefix + command} clasiketch
*┃›📝* ${usedPrefix + command} classic-art
*┃›📝* ${usedPrefix + command} coal-sketch
*┃›📝* ${usedPrefix + command} coffee_break
*┃›📝* ${usedPrefix + command} color-checkers
*┃›📝* ${usedPrefix + command} colored-pencils
*┃›📝* ${usedPrefix + command} colored-pens
*┃›📝* ${usedPrefix + command} colored-sketch
*┃›📝* ${usedPrefix + command} colored-squares
*┃›📝* ${usedPrefix + command} colored-texture
*┃›📝* ${usedPrefix + command} colorful-tiles
*┃›📝* ${usedPrefix + command} colorful-wood
*┃›📝* ${usedPrefix + command} coloring-book
*┃›📝* ${usedPrefix + command} coloured-pencils
*┃›📝* ${usedPrefix + command} comic-book
*┃›📝* ${usedPrefix + command} comics!-boom
*┃›📝* ${usedPrefix + command} concrete-jungle
*┃›📝* ${usedPrefix + command} cotton-candy
*┃›📝* ${usedPrefix + command} crayola
*┃›📝* ${usedPrefix + command} crooked_gambler
*┃›📝* ${usedPrefix + command} crown
*┃›📝* ${usedPrefix + command} cupid
*┃›📝* ${usedPrefix + command} cutout
*┃›📝* ${usedPrefix + command} death_proof
*┃›📝* ${usedPrefix + command} deep-blue
*┃›📝* ${usedPrefix + command} dj
*┃›📝* ${usedPrefix + command} dollar
*┃›📝* ${usedPrefix + command} doodle-sketch
*┃›📝* ${usedPrefix + command} dots
*┃›📝* ${usedPrefix + command} draft
*┃›📝* ${usedPrefix + command} drawing-photo
*┃›📝* ${usedPrefix + command} drawing
*┃›📝* ${usedPrefix + command} drawing_near_the_sea
*┃›📝* ${usedPrefix + command} dreamy-sky
*┃›📝* ${usedPrefix + command} drizzle
*┃›📝* ${usedPrefix + command} drops
*┃›📝* ${usedPrefix + command} easter-flowers
*┃›📝* ${usedPrefix + command} easter-frame
*┃›📝* ${usedPrefix + command} easter
*┃›📝* ${usedPrefix + command} equestrienne
*┃›📝* ${usedPrefix + command} esquire
*┃›📝* ${usedPrefix + command} ethanol
*┃›📝* ${usedPrefix + command} etude
*┃›📝* ${usedPrefix + command} evening-billboard
*┃›📝* ${usedPrefix + command} explorer-drawing
*┃›📝* ${usedPrefix + command} eye
*┃›📝* ${usedPrefix + command} family_in_museum
*┃›📝* ${usedPrefix + command} famous-gallery
*┃›📝* ${usedPrefix + command} female_gambler
*┃›📝* ${usedPrefix + command} female_soldier
*┃›📝* ${usedPrefix + command} film-strip
*┃›📝* ${usedPrefix + command} film_scan
*┃›📝* ${usedPrefix + command} fire
*┃›📝* ${usedPrefix + command} fireplace
*┃›📝* ${usedPrefix + command} flood
*┃›📝* ${usedPrefix + command} flower_frame
*┃›📝* ${usedPrefix + command} football-field
*┃›📝* ${usedPrefix + command} frame
*┃›📝* ${usedPrefix + command} frame_and_roses
*┃›📝* ${usedPrefix + command} frankenstein-monster
*┃›📝* ${usedPrefix + command} frosty_window
*┃›📝* ${usedPrefix + command} galatea
*┃›📝* ${usedPrefix + command} galaxy
*┃›📝* ${usedPrefix + command} galeries_lafayette
*┃›📝* ${usedPrefix + command} gallery-visitor
*┃›📝* ${usedPrefix + command} gas_mask_freaks
*┃›📝* ${usedPrefix + command} gentle-painting
*┃›📝* ${usedPrefix + command} ghostwood
*┃›📝* ${usedPrefix + command} giant-artwork
*┃›📝* ${usedPrefix + command} girl-with-bicycle
*┃›📝* ${usedPrefix + command} girls_with_poster
*┃›📝* ${usedPrefix + command} glamour
*┃›📝* ${usedPrefix + command} glass
*┃›📝* ${usedPrefix + command} glossy-cartoon
*┃›📝* ${usedPrefix + command} glowing-circles
*┃›📝* ${usedPrefix + command} goalkeeper
*┃›📝* ${usedPrefix + command} goats
*┃›📝* ${usedPrefix + command} godfather
*┃›📝* ${usedPrefix + command} golden-brown
*┃›📝* ${usedPrefix + command} golden_valentine
*┃›📝* ${usedPrefix + command} good_luck_chuck
*┃›📝* ${usedPrefix + command} graffiti
*┃›📝* ${usedPrefix + command} graffiti_artist
*┃›📝* ${usedPrefix + command} graffiti_billboard
*┃›📝* ${usedPrefix + command} graffiti_wall
*┃›📝* ${usedPrefix + command} greenwich
*┃›📝* ${usedPrefix + command} halloween-pumpkins
*┃›📝* ${usedPrefix + command} halo
*┃›📝* ${usedPrefix + command} hammock
*┃›📝* ${usedPrefix + command} harley-davidson
*┃›📝* ${usedPrefix + command} heart_locket
*┃›📝* ${usedPrefix + command} hockey
*┃›📝* ${usedPrefix + command} hockey_team
*┃›📝* ${usedPrefix + command} huge_billboard
*┃›📝* ${usedPrefix + command} icecream
*┃›📝* ${usedPrefix + command} impressionists
*┃›📝* ${usedPrefix + command} in-the-cinema
*┃›📝* ${usedPrefix + command} in-the-woods
*┃›📝* ${usedPrefix + command} indian_beauty
*┃›📝* ${usedPrefix + command} ink-pen
*┃›📝* ${usedPrefix + command} ink-portrait
*┃›📝* ${usedPrefix + command} ink-wash
*┃›📝* ${usedPrefix + command} jigsaw_puzzle
*┃›📝* ${usedPrefix + command} juice
*┃›📝* ${usedPrefix + command} kitty-and-frame
*┃›📝* ${usedPrefix + command} kitty
*┃›📝* ${usedPrefix + command} knight-with-sword
*┃›📝* ${usedPrefix + command} knight
*┃›📝* ${usedPrefix + command} lake
*┃›📝* ${usedPrefix + command} large_painting
*┃›📝* ${usedPrefix + command} last_advert
*┃›📝* ${usedPrefix + command} late_autumn
*┃›📝* ${usedPrefix + command} latte-art
*┃›📝* ${usedPrefix + command} lavander
*┃›📝* ${usedPrefix + command} leftfield
*┃›📝* ${usedPrefix + command} lego
*┃›📝* ${usedPrefix + command} lego_portrait
*┃›📝* ${usedPrefix + command} lemon-tree
*┃›📝* ${usedPrefix + command} lenin
*┃›📝* ${usedPrefix + command} library
*┃›📝* ${usedPrefix + command} local_shop
*┃›📝* ${usedPrefix + command} london_calling
*┃›📝* ${usedPrefix + command} louvre
*┃›📝* ${usedPrefix + command} love-letter
*┃›📝* ${usedPrefix + command} mac-solarize
*┃›📝* ${usedPrefix + command} madonna
*┃›📝* ${usedPrefix + command} magazine-comics
*┃›📝* ${usedPrefix + command} magic-stars
*┃›📝* ${usedPrefix + command} magnetic-sketchpad
*┃›📝* ${usedPrefix + command} male_gambler
*┃›📝* ${usedPrefix + command} marilyn_autograph
*┃›📝* ${usedPrefix + command} marilyn_monroe
*┃›📝* ${usedPrefix + command} master-sketch
*┃›📝* ${usedPrefix + command} medieval_art
*┃›📝* ${usedPrefix + command} melbourne-gallery
*┃›📝* ${usedPrefix + command} memories
*┃›📝* ${usedPrefix + command} mermaid
*┃›📝* ${usedPrefix + command} metalic-grain
*┃›📝* ${usedPrefix + command} midnight_billboard
*┃›📝* ${usedPrefix + command} mini_cooper
*┃›📝* ${usedPrefix + command} mint_frame
*┃›📝* ${usedPrefix + command} mirror
*┃›📝* ${usedPrefix + command} modern_art_exhibition
*┃›📝* ${usedPrefix + command} moist
*┃›📝* ${usedPrefix + command} mona_lisa
*┃›📝* ${usedPrefix + command} mosaic-sketch
*┃›📝* ${usedPrefix + command} mount_rushmore
*┃›📝* ${usedPrefix + command} museum
*┃›📝* ${usedPrefix + command} museum_kid
*┃›📝* ${usedPrefix + command} mysterious_painting
*┃›📝* ${usedPrefix + command} napkine
*┃›📝* ${usedPrefix + command} national-gallery-in-london
*┃›📝* ${usedPrefix + command} negative-smoke
*┃›📝* ${usedPrefix + command} new-year-frames
*┃›📝* ${usedPrefix + command} new-york-street
*┃›📝* ${usedPrefix + command} newspaper
*┃›📝* ${usedPrefix + command} new_york
*┃›📝* ${usedPrefix + command} night
*┃›📝* ${usedPrefix + command} night_city
*┃›📝* ${usedPrefix + command} night_ride
*┃›📝* ${usedPrefix + command} night_street
*┃›📝* ${usedPrefix + command} night_walk
*┃›📝* ${usedPrefix + command} nostalgic-frame
*┃›📝* ${usedPrefix + command} notebook
*┃›📝* ${usedPrefix + command} nyc
*┃›📝* ${usedPrefix + command} ny_taxis
*┃›📝* ${usedPrefix + command} obama
*┃›📝* ${usedPrefix + command} ocean
*┃›📝* ${usedPrefix + command} odessa_opera_house
*┃›📝* ${usedPrefix + command} oil_painting
*┃›📝* ${usedPrefix + command} old-camera
*┃›📝* ${usedPrefix + command} old-dream
*┃›📝* ${usedPrefix + command} old-letter
*┃›📝* ${usedPrefix + command} old-photo
*┃›📝* ${usedPrefix + command} old-screen
*┃›📝* ${usedPrefix + command} old_book
*┃›📝* ${usedPrefix + command} on_the_moon
*┃›📝* ${usedPrefix + command} on_the_mountain
*┃›📝* ${usedPrefix + command} ophelia
*┃›📝* ${usedPrefix + command} orion
*┃›📝* ${usedPrefix + command} ornament
*┃›📝* ${usedPrefix + command} osaka
*┃›📝* ${usedPrefix + command} oxford
*┃›📝* ${usedPrefix + command} paint-brush
*┃›📝* ${usedPrefix + command} painter_at_work
*┃›📝* ${usedPrefix + command} painting-and-sketches
*┃›📝* ${usedPrefix + command} paints-crafts
*┃›📝* ${usedPrefix + command} paintwash
*┃›📝* ${usedPrefix + command} parchment
*┃›📝* ${usedPrefix + command} paris_hilton
*┃›📝* ${usedPrefix + command} passage
*┃›📝* ${usedPrefix + command} passing-by-the-painting
*┃›📝* ${usedPrefix + command} pastel
*┃›📝* ${usedPrefix + command} pavement_art
*┃›📝* ${usedPrefix + command} pavement_artist
*┃›📝* ${usedPrefix + command} pavement_drawing
*┃›📝* ${usedPrefix + command} pedestrian-crossing
*┃›📝* ${usedPrefix + command} peeling
*┃›📝* ${usedPrefix + command} pencil-sketch
*┃›📝* ${usedPrefix + command} pencils-canvas
*┃›📝* ${usedPrefix + command} perfume_shop
*┃›📝* ${usedPrefix + command} picadilly_circus
*┃›📝* ${usedPrefix + command} piccadilly-arcade
*┃›📝* ${usedPrefix + command} pictures_sale
*┃›📝* ${usedPrefix + command} picture_at_the_gallery
*┃›📝* ${usedPrefix + command} pilot
*┃›📝* ${usedPrefix + command} pink-panther
*┃›📝* ${usedPrefix + command} pinkify
*┃›📝* ${usedPrefix + command} pisa_street
*┃›📝* ${usedPrefix + command} playful-cat
*┃›📝* ${usedPrefix + command} polaroid_dress
*┃›📝* ${usedPrefix + command} portrait
*┃›📝* ${usedPrefix + command} portrait_on_the_wall
*┃›📝* ${usedPrefix + command} posterize
*┃›📝* ${usedPrefix + command} posters
*┃›📝* ${usedPrefix + command} press-comics
*┃›📝* ${usedPrefix + command} press_conference
*┃›📝* ${usedPrefix + command} prince_of_wales_theatre
*┃›📝* ${usedPrefix + command} pumpkins
*┃›📝* ${usedPrefix + command} puppy-with-frame
*┃›📝* ${usedPrefix + command} purple-haze
*┃›📝* ${usedPrefix + command} purple_sky
*┃›📝* ${usedPrefix + command} putin
*┃›📝* ${usedPrefix + command} puzzle
*┃›📝* ${usedPrefix + command} rainbow
*┃›📝* ${usedPrefix + command} rainwater
*┃›📝* ${usedPrefix + command} rainy-night
*┃›📝* ${usedPrefix + command} rainy_day
*┃›📝* ${usedPrefix + command} reconstruction
*┃›📝* ${usedPrefix + command} red-and-blue
*┃›📝* ${usedPrefix + command} red-lights
*┃›📝* ${usedPrefix + command} red-wine
*┃›📝* ${usedPrefix + command} reflection
*┃›📝* ${usedPrefix + command} replacing_billboard_advert
*┃›📝* ${usedPrefix + command} reproduction
*┃›📝* ${usedPrefix + command} retail_park
*┃›📝* ${usedPrefix + command} retro-black
*┃›📝* ${usedPrefix + command} retro-comic
*┃›📝* ${usedPrefix + command} rinse
*┃›📝* ${usedPrefix + command} riverside_billboard
*┃›📝* ${usedPrefix + command} romantic_etude
*┃›📝* ${usedPrefix + command} roses-and-marshmallows
*┃›📝* ${usedPrefix + command} roses
*┃›📝* ${usedPrefix + command} scratched-photo
*┃›📝* ${usedPrefix + command} scribble
*┃›📝* ${usedPrefix + command} scroll
*┃›📝* ${usedPrefix + command} sharp-paint
*┃›📝* ${usedPrefix + command} shine-stripes
*┃›📝* ${usedPrefix + command} shiny-color
*┃›📝* ${usedPrefix + command} shooting-stars
*┃›📝* ${usedPrefix + command} shopping-arcade
*┃›📝* ${usedPrefix + command} shopping_center
*┃›📝* ${usedPrefix + command} shop_poster
*┃›📝* ${usedPrefix + command} sidewalk
*┃›📝* ${usedPrefix + command} singer
*┃›📝* ${usedPrefix + command} sip
*┃›📝* ${usedPrefix + command} sketch-practicing
*┃›📝* ${usedPrefix + command} skydiver
*┃›📝* ${usedPrefix + command} snowboard
*┃›📝* ${usedPrefix + command} snow_in_london
*┃›📝* ${usedPrefix + command} soak
*┃›📝* ${usedPrefix + command} soda
*┃›📝* ${usedPrefix + command} solarization
*┃›📝* ${usedPrefix + command} soppy
*┃›📝* ${usedPrefix + command} sparklers
*┃›📝* ${usedPrefix + command} sparkles
*┃›📝* ${usedPrefix + command} sparkling-snow
*┃›📝* ${usedPrefix + command} special_billboard
*┃›📝* ${usedPrefix + command} sphinx
*┃›📝* ${usedPrefix + command} spray
*┃›📝* ${usedPrefix + command} spring-flowers
*┃›📝* ${usedPrefix + command} spring_memories
*┃›📝* ${usedPrefix + command} stacco
*┃›📝* ${usedPrefix + command} stadium
*┃›📝* ${usedPrefix + command} stardust
*┃›📝* ${usedPrefix + command} stars
*┃›📝* ${usedPrefix + command} static-noise
*┃›📝* ${usedPrefix + command} stencil
*┃›📝* ${usedPrefix + command} stone-age
*┃›📝* ${usedPrefix + command} street_artist
*┃›📝* ${usedPrefix + command} street_exhibition
*┃›📝* ${usedPrefix + command} striped-jeans
*┃›📝* ${usedPrefix + command} summer-dust
*┃›📝* ${usedPrefix + command} summoning-spirits
*┃›📝* ${usedPrefix + command} sunburst
*┃›📝* ${usedPrefix + command} sunray
*┃›📝* ${usedPrefix + command} superman
*┃›📝* ${usedPrefix + command} supernova
*┃›📝* ${usedPrefix + command} surfer
*┃›📝* ${usedPrefix + command} swedish_billboard
*┃›📝* ${usedPrefix + command} tablet
*┃›📝* ${usedPrefix + command} taipei
*┃›📝* ${usedPrefix + command} the-frame
*┃›📝* ${usedPrefix + command} the_gun
*┃›📝* ${usedPrefix + command} the_kiss
*┃›📝* ${usedPrefix + command} tintbrush
*┃›📝* ${usedPrefix + command} tokyo-crossing
*┃›📝* ${usedPrefix + command} toonic
*┃›📝* ${usedPrefix + command} torn_billboard
*┃›📝* ${usedPrefix + command} traffic-lights
*┃›📝* ${usedPrefix + command} train-station-poster
*┃›📝* ${usedPrefix + command} train_station
*┃›📝* ${usedPrefix + command} tram
*┃›📝* ${usedPrefix + command} travellers-sketch
*┃›📝* ${usedPrefix + command} triangular
*┃›📝* ${usedPrefix + command} truck-advert
*┃›📝* ${usedPrefix + command} truck
*┃›📝* ${usedPrefix + command} tub
*┃›📝* ${usedPrefix + command} tulips
*┃›📝* ${usedPrefix + command} tv_girl
*┃›📝* ${usedPrefix + command} twilight
*┃›📝* ${usedPrefix + command} two_cats
*┃›📝* ${usedPrefix + command} two_female_fans
*┃›📝* ${usedPrefix + command} ultra-paint
*┃›📝* ${usedPrefix + command} underground-poster
*┃›📝* ${usedPrefix + command} urban
*┃›📝* ${usedPrefix + command} urban_billboard
*┃›📝* ${usedPrefix + command} vhs
*┃›📝* ${usedPrefix + command} vibration
*┃›📝* ${usedPrefix + command} victoria_beckham
*┃›📝* ${usedPrefix + command} video-game
*┃›📝* ${usedPrefix + command} vintage-photos
*┃›📝* ${usedPrefix + command} vintage-scooter
*┃›📝* ${usedPrefix + command} vintage_frame
*┃›📝* ${usedPrefix + command} vintage_table
*┃›📝* ${usedPrefix + command} vitrage-window
*┃›📝* ${usedPrefix + command} vogue
*┃›📝* ${usedPrefix + command} wall-mural
*┃›📝* ${usedPrefix + command} wall-painting
*┃›📝* ${usedPrefix + command} wall-poster
*┃›📝* ${usedPrefix + command} wall
*┃›📝* ${usedPrefix + command} wall_banner
*┃›📝* ${usedPrefix + command} wall_painting
*┃›📝* ${usedPrefix + command} wanted_wizard
*┃›📝* ${usedPrefix + command} warhol-dots
*┃›📝* ${usedPrefix + command} warhol
*┃›📝* ${usedPrefix + command} warrior
*┃›📝* ${usedPrefix + command} watchinng
*┃›📝* ${usedPrefix + command} watercolor
*┃›📝* ${usedPrefix + command} watercolour-painting
*┃›📝* ${usedPrefix + command} watercolours
*┃›📝* ${usedPrefix + command} waterway
*┃›📝* ${usedPrefix + command} waves
*┃›📝* ${usedPrefix + command} wayback
*┃›📝* ${usedPrefix + command} weave
*┃›📝* ${usedPrefix + command} wedding-day
*┃›📝* ${usedPrefix + command} wet
*┃›📝* ${usedPrefix + command} wild-brush
*┃›📝* ${usedPrefix + command} wine-label
*┃›📝* ${usedPrefix + command} winter-princess
*┃›📝* ${usedPrefix + command} witch
*┃›📝* ${usedPrefix + command} woman_pilot
*┃›📝* ${usedPrefix + command} wood
*┃›📝* ${usedPrefix + command} worker-by-the-billboard
*┃›📝* ${usedPrefix + command} woven-sketch
*┃›📝* ${usedPrefix + command} xmas_tree
*┃›📝* ${usedPrefix + command} yellow_wall`)
conn.reply(m.chat, global.wait, m)
let img = await q.download?.()
let url = await uploadImage(img)
let images = `https://violetics.pw/api/photomaker/${encodeURIComponent(text)}?apikey=beta&image=${encodeURIComponent(url)}`
let caption = `
*🍀 Efecto:* ${text}`
conn.sendButton(m.chat, caption, wm, images, [['🍂 Más Opciones', `${usedPrefix}phmakerlist`]], m)
}
handler.help = ['phmaker']
handler.tags = ['logo']
handler.command = /^(phmaker|phmarker|phmarke|phmake)$/i
handler.register = true
export default handler
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
