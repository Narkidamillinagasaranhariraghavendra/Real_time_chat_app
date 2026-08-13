import imagekit,{ toFile } from "@imagekit/nodejs";


const imagekitInstance = new imagekit({PrivateKey: process.env.IMAGEKIT_PRIVATE_KEY});

function hasImageKitConfig(){
    return Boolean(process.env.IMAGEKIT_PRIVATE_KEY);

}

function createFileName(originalName="upload"){
    const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g,"_");
    return `chat-${Date.now()}-${safeName}`;
    /**
     * @see https://imagekit.io/docs/api-reference/upload-file
     */
}

async function uploadChatMedia(file){
    const fileName = createFileName(file.originalname);

    const result = await imagekitInstance.upload({
        file: toFile(file.buffer),
        fiileName,
        folder:"/chat",
    });
    return result.url;
}

export { uploadChatMedia,hasImageKitConfig};
