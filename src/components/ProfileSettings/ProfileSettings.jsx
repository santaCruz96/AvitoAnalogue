import * as S from './styles'

function ProfileSettings() {
    return (
        <S.ProfileSettingsBlock>
            <S.ProfileSettingsContent>
                <S.ProfileSettingsTittle>Настройки профиля</S.ProfileSettingsTittle>
                <S.ProfileSettings>
                    <S.SettingsLeft>
                        <S.SettingsImgBlock>
                            <S.SettingsImgLink href="" target="_self">
                                <S.SettingsImg src="#" alt=""/>
                            </S.SettingsImgLink>
                        </S.SettingsImgBlock>
                        <S.SettingsChangePhoto>
                            Заменить
                        </S.SettingsChangePhoto>
                    </S.SettingsLeft>
                    <S.SettingsRight>
                        <S.SettingsForm action='#'>
                            <S.SettingsOption>
                                <S.SettingsLabel for="fname">Имя</S.SettingsLabel>
                                <S.SettingsFirstName class="settings__f-name" id="settings-fname" name="fname" type="text" value="Ан" placeholder=""/>
                            </S.SettingsOption>
                            <S.SettingsOption>
                                <S.SettingsLabel for="lname">Фамилмя</S.SettingsLabel>
                                <S.SettingsLastName class="settings__f-name" id="settings-lname" name="lname" type="text" value="Городецкий" placeholder=""/>
                            </S.SettingsOption>
                            <S.SettingsOption>
                                <S.SettingsLabel for="city">Город</S.SettingsLabel>
                                <S.SettingsCity class="settings__f-name" id="settings-city" name="city" type="text" value="Санкт-Петербург" placeholder=""/>
                            </S.SettingsOption>
                            <S.SettingsOption>
                                <S.SettingsLabel for="phone">Телефон</S.SettingsLabel>
                                <S.SettingsPhone class="settings__f-name" id="settings-phone" name="phone" type="text" value="89161234567" placeholder=""/>
                            </S.SettingsOption>
                            <S.SettingsButton>Сохранить</S.SettingsButton>
                        </S.SettingsForm>
                    </S.SettingsRight>
                </S.ProfileSettings>
            </S.ProfileSettingsContent>
        </S.ProfileSettingsBlock>
    )
}

export default ProfileSettings