export const canvasStreamer = {

    doLoad: function () {
        this.cameraVideo = document.querySelector('.preview>video');
        this.playerVideo = document.getElementById('playerVideo')

        /*   let playVideo = document.createElement('video');
          playVideo.src = "example.mp4"
          playVideo.autoplay = true;
          playVideo.loop = true;
          playVideo.muted = true;
          playVideo.preload = "auto"
          this.playerVideo = playVideo */

        this.c1 = document.getElementById("c1");
        this.ctx1 = this.c1.getContext("2d");
        let self = this;
        /*   this.video.addEventListener("play", function () { */
        self.width = self.cameraVideo.videoWidth / 1.8;
        self.height = self.cameraVideo.videoHeight / 1.8;

        this.c1.width = self.width
        this.c1.height = self.height
        self.timerCallback();
        /*  }, false); */
    },

    timerCallback: function () {
        if (this.cameraVideo.paused || this.cameraVideo.ended) {
            return;
        }
        this.computeFrame();
        let self = this;
        setTimeout(function () {
            self.timerCallback();
        }, 0);
    },

    computeFrame: function () {

        this.ctx1.drawImage(this.cameraVideo, 0, 0, this.width, this.height);
        this.ctx1.drawImage(this.playerVideo, 0, 0, this.width, this.height)
        /*         let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
                let l = frame.data.length / 4;
        
                for (let i = 0; i < l; i++) {
                    let r = frame.data[i * 4 + 0];
                    let g = frame.data[i * 4 + 1];
                    let b = frame.data[i * 4 + 2];
                    if (g === 0 && r === 0 && b === 0)
                        frame.data[i * 4 + 3] = 0;
                }
                this.ctx1.putImageData(frame, 0, 0);
         */
        return;
    }
};