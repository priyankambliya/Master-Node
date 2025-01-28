
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg'
import fs from 'fs'
import path from "path";
import { v4 } from 'uuid'

export default () => {

    ffmpeg.setFfmpegPath(ffmpegPath.path)

    const inputPath = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

    // Define the output folder path for the thumbnails
    const outputPath = path.join(__dirname, '/../../uploads/thumbnail');

    // Create the output folder if it doesn't exist
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }

    // Generate the thumbnail
    ffmpeg(inputPath)
        .screenshots({
            timestamps: [1], // Capture a thumbnail at 1 second into the video
            filename: `thumbnail-${v4()}.jpg`, // Generate a unique filename
            folder: outputPath,
        })
        .on('end', () => {
            // console.log('Thumbnail generated successfully.');
        })
        .on('error', (err: any) => {
            console.error('Error generating thumbnail:', err);
        });
}