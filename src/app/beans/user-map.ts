export class UserMap {
    mapname: string;
    submitter: string;
    description: string;
    status: string;
    uploaddate: Date;
    
    pictureFile: File;
    
    image: string | ArrayBuffer;
    mapFile: File;
    static createFromFiles(submitter: string, mapname: string, description: string, status: string, pictureFile: File, mapFile: File): UserMap  {
        var reader = new FileReader();
        var image;
        reader.onload = e => image = reader.result;
        reader.readAsDataURL(image);
        return new UserMap(submitter, mapname, description, status, pictureFile, image, mapFile);
    }
    constructor(submitter: string, mapname: string, description: string, status: string, pictureFile: File, picture: string | ArrayBuffer, mapFile: File) {
        this.submitter = submitter; this.mapname = mapname; this.description = description; this.status = status;
        this.pictureFile = pictureFile; this.image = picture; this.mapFile = mapFile;
    }
}

// username, mapName, mapDescription, picture, fileMap