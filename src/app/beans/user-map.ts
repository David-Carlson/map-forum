export class UserMap {
    mapname: string;
    submitter: string;
    description: string;
    status: string;
    uploaddate: Date;
    image: string | ArrayBuffer;
    file: string | ArrayBuffer;

    // static createFromFiles(submitter: string, mapname: string, description: string, status: string, pictureFile: File, mapFile: File): UserMap  {
    //     var reader = new FileReader();
    //     var image;
    //     reader.onload = e => image = reader.result;
    //     reader.readAsDataURL(image);
    //     return new UserMap(submitter, mapname, description, status, image, file);
    // }
    constructor(submitter: string, mapname: string, description: string, status: string, image: string | ArrayBuffer, file: string | ArrayBuffer) {
        this.submitter = submitter; this.mapname = mapname; this.description = description; this.status = status;
        this.image = image; this.file = file;
    }
}

// username, mapName, mapDescription, picture, fileMap