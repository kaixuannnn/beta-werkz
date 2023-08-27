
import { AppButton } from '../components/AppButton'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import EmptyPlaceholder from '../components/EmptyPlaceholder'
import {useSelector} from 'react-redux'
import {RootState } from '../store'
import classes from './ProfilePage.module.css'
import ProfileListItem from '../components/ProfileListItem'
import { useNavigate } from 'react-router-dom'
import usePagination from '../hooks/usePagination'
import { Pagination } from '@mui/material'
import { ChangeEvent,  useState } from 'react'


const ProfilePage = () => {

  const profiles = useSelector((state:RootState)=>state.profile.items)
  const navigate = useNavigate()

  const [page, setPage] = useState(1);
  const PER_PAGE = 8;

  const count = Math.ceil(profiles.length/PER_PAGE);
  const data = usePagination(profiles, PER_PAGE);

  const handleChange = (event:ChangeEvent<unknown> , page: number) => {
    setPage(page)
    data.jump(page)
  }

  return (
    <div className={classes.container}>
      <h3>Profile</h3>
      <div className={classes.grid}>
        {data.currentData() ? (
          data
            .currentData()
            .map(profile => (
              <ProfileListItem {...profile} key={profile.email} />
            ))
        ) : (
          <EmptyPlaceholder />
        )}
      </div>
      <AppButton
        className={classes.addProfileButton}
        title='New Profile'
        icon={<AddCircleOutlineOutlinedIcon />}
        onClick={() => navigate('/edit-profile')}
      />
      <div className={classes.pagination}>
        <Pagination
          count={count}
          page={page}
          variant='outlined'
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default ProfilePage

