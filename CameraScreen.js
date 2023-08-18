import { useEffect, useRef, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { PhotoModal } from './components/PhotoModal';
import { TakePicBtn } from './components/TakePicBtn';
import { ChangeCamBtn } from './components/ChangeCamBtn';

const CameraScreen = () => {
    const [hasPermission, setHasPermision]= useState(false)
    const [capturePictureURI, setCapturePictureURI] = useState(null)
    const [type, setType] = useState(CameraType.back)
    const cameraRef = useRef(null)

    const scrrenHeight = Dimensions.get('screen').height
    const screenWidth = Dimensions.get('screen').width

    useEffect(()=>{
        (async ()=>{
            const {status} = await Camera.requestCameraPermissionsAsync()
            setHasPermision(status === 'granted')
        })()
    },[])

    const handleCapture = async () => {
        if(cameraRef.current){
            const photo = await cameraRef.current.takePictureAsync()
            setCapturePictureURI(photo.uri)
        }
    }
    
    const toggleCameraType = () => 
        setType(current => 
            (current === CameraType.back ? CameraType.front : CameraType.back)
        )
    
    return (
        <View>
            {hasPermission ? (
                <Camera style={{height:scrrenHeight-150, width: screenWidth+2}} ref={cameraRef} type={type}/>
            ):(
                <Text>No access to camera</Text>
            )}
            <View style={{height:150, backgroundColor: 'black', flexDirection: 'row', paddingLeft:screenWidth/2 -30, paddingTop:10}}>
                <TakePicBtn action={handleCapture}/>
                <ChangeCamBtn action={toggleCameraType}/>
            </View>
            <PhotoModal action={()=> setCapturePictureURI(null)} image={capturePictureURI}/>
        </View>
    )
}

export default CameraScreen