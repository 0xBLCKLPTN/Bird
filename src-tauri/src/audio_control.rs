use raylib::core::audio::RaylibAudio;

pub struct VolumeController {
    pub audio_device: RaylibAudio,
}

impl VolumeController {
    pub fn init() -> VolumeController {
        let audio_dev = RaylibAudio::init_audio_device();
        VolumeController {audio_device: audio_dev }
    }

    pub fn change_volume(&mut self) {
        self.audio_device.set_master_volume(0.3);
    }
}