import { AppContainer } from "../components/app-container/AppContainer";
import { ControlArea } from "../components/control-area/ControlArea";
import { ImageArea } from "../components/image-area/ImageArea";
import { ImagePreview } from "../components/image-preview/ImagePreview";
import { ImageUpload } from "../components/image-upload/ImageUpload";
import { Sidebar } from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <main>
        <AppContainer>
          <Sidebar></Sidebar>
          <ImageArea>
            <ImagePreview></ImagePreview>
            <ImageUpload></ImageUpload>
          </ImageArea>
          <ControlArea></ControlArea>
        </AppContainer>
      </main>
    </>
  );
}
