import { useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { useChangeUserDataMutation } from '../../api/skyVitoApi'
import * as S from './styles'

function ProfileSettings({ data, isSuccess }) {
    const SERVER = 'http://localhost:8090/'

    const firstName = useRef()
    const lastName = useRef()
    const city = useRef()
    const phone = useRef()
    const filePicker = useRef(null)

    const token = useSelector((state) => state.auth?.accessToken)

    const [selectedAvatarFile, setSelectedAvatarFile] = useState(null)

    const [changeUserData] = useChangeUserDataMutation()

    const [avatar, setAvatar] = useState(null)
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
    }

    const submitAvatar = async () => {
        const formData = new FormData()
        formData.append('file', selectedAvatarFile)

        const res = await fetch(`${SERVER}user/avatar`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`
            },
            body: formData
        })
        console.log(res)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        changeUserData(userValues)
        console.log(userValues)
        if (selectedAvatarFile) {
            submitAvatar()
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
            setAvatar(data.avatar)
            firstName.current.value = data.name
            lastName.current.value = data.surname
            city.current.value = data.city
            phone.current.value = data.phone
        }
    }, [isSuccess])

    return (
        <S.ProfileSettingsBlock>
            <S.ProfileSettingsContent>
                <S.ProfileSettingsTittle>Настройки профиля</S.ProfileSettingsTittle>
                <S.ProfileSettings>
                    <S.SettingsLeft>
                        <S.SettingsImgBlock>
                            <S.SettingsImg isAvatar = {avatar} src={`${SERVER}${avatar}`} alt=""/>
                        </S.SettingsImgBlock>
                        <S.SettingsChangePhoto>
                            <input type='file' onChange={handleAvatarChange} ref={filePicker}></input>
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