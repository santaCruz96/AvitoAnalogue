import { useEffect, useState, useRef } from 'react'
import { useChangeUserDataMutation, useChangeUserAvatarMutation } from '../../api/skyVitoApi'
import * as S from './styles'

function ProfileSettings({ data, isSuccess, isLoading }) {
    const SERVER = 'http://localhost:8090/'

    const firstName = useRef()
    const lastName = useRef()
    const city = useRef()
    const phone = useRef()
    const filePicker = useRef()

    const [selectedAvatarFile, setSelectedAvatarFile] = useState(null)

    const [changeUserData] = useChangeUserDataMutation()
    const [changeUserAvatar] = useChangeUserAvatarMutation()

    const [avatar, setAvatar] = useState(null)
    const [preview, setPreview] = useState(null)
    const [userValues, setUserValues] = useState({
        role: 'user',
        email: '',
        name: '',
        surname: '',
        phone: '',
        city: ''
    })

    const handleAvatarChange = (e) => {
        console.log(e.target.files)
        setSelectedAvatarFile(e.target.files[0])
        setPreview(e.target.files[0])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        changeUserData(userValues)
        console.log(userValues)
        
        if (selectedAvatarFile) {
            const formData = new FormData()
            formData.append('file', selectedAvatarFile)
            changeUserAvatar(formData)
        }
    }

    const handleFirstNameChange = (e) => {
        setUserValues({
            ...userValues,
            name: e.target.value,
        })
    }
    const handleLastNameChange = (e) => {
        setUserValues({
            ...userValues,
            surname: e.target.value,
        })
    }
    const handleCityChange = (e) => {
        setUserValues({
            ...userValues,
            city: e.target.value,
        })
    }
    const handlePhoneChange = (e) => {
        setUserValues({
            ...userValues,
            phone: e.target.value,
        })
    }

    useEffect(() => {
        if (isSuccess) {
            setUserValues({
                ...userValues,
                email: data.email,
                name: data.name,
                surname: data.surname,
                phone: data.phone,
                city: data.city
            })
            setPreview(null)
            setAvatar(data.avatar)
            firstName.current.value = data.name
            lastName.current.value = data.surname
            city.current.value = data.city
            phone.current.value = data.phone
        }
    }, [isSuccess])

    useEffect(() => {
        if (isLoading) {
            setAvatar(' ')
            firstName.current.value = 'Загрузка'
            lastName.current.value = 'Загрузка'
            city.current.value = 'Загрузка'
            phone.current.value = 'Загрузка'
        }
    }, [isLoading])

    const handlePickAvatar = () => {
        filePicker.current.click()
    }

    return (
        <S.ProfileSettingsBlock>
            <S.ProfileSettingsContent>
                <S.ProfileSettingsTittle>Настройки профиля</S.ProfileSettingsTittle>
                <S.ProfileSettings>
                    <S.SettingsLeft>
                        <S.SettingsImgBlock>
                            <S.SettingsImg isAvatar = {avatar} src={preview ? URL.createObjectURL(preview) : `${SERVER}${avatar}`} alt=""/>
                        </S.SettingsImgBlock>
                        <S.AvatarInput type='file' onChange={handleAvatarChange} ref={filePicker}></S.AvatarInput>
                        <S.SettingsChangePhoto onClick={handlePickAvatar}>
                            Заменить
                        </S.SettingsChangePhoto>
                    </S.SettingsLeft>
                    <S.SettingsRight>
                        <S.SettingsForm action='#'>
                            <S.SettingsOption>
                                <S.SettingsLabel for="fname">Имя</S.SettingsLabel>
                                <S.SettingsFirstName onChange={handleFirstNameChange} ref={firstName} id="settings-fname" name="fname" type="text"/>
                            </S.SettingsOption>
                            <S.SettingsOption>
                                <S.SettingsLabel for="lname">Фамилмя</S.SettingsLabel>
                                <S.SettingsLastName onChange={handleLastNameChange} ref={lastName} id="settings-lname" name="lname" type="text"/>
                            </S.SettingsOption>
                            <S.SettingsOption>
                                <S.SettingsLabel for="city">Город</S.SettingsLabel>
                                <S.SettingsCity onChange={handleCityChange} ref={city} id="settings-city" name="city" type="text"/>
                            </S.SettingsOption>
                            <S.SettingsOption>
                                <S.SettingsLabel for="phone">Телефон</S.SettingsLabel>
                                <S.SettingsPhone onChange={handlePhoneChange} ref={phone} id="settings-phone" name="phone" type="text"/>
                            </S.SettingsOption>
                            <S.SettingsButton onClick={onSubmit}>Сохранить</S.SettingsButton>
                        </S.SettingsForm>
                    </S.SettingsRight>
                </S.ProfileSettings>
            </S.ProfileSettingsContent>
        </S.ProfileSettingsBlock>
    )
}

export default ProfileSettings