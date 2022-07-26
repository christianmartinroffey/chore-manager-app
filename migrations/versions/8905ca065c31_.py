"""empty message

<<<<<<<< HEAD:migrations/versions/8905ca065c31_.py
Revision ID: 8905ca065c31
Revises: 
Create Date: 2022-07-26 17:35:50.445886
========
Revision ID: 721a35cc2fa4
Revises: 
Create Date: 2022-07-26 18:04:26.311639
>>>>>>>> ec4fa0e (added functionality in the routes to check if email already exists for the usersinteam table and to throw a 409 error if so. Team implementation is now complete):migrations/versions/721a35cc2fa4_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/8905ca065c31_.py
revision = '8905ca065c31'
========
revision = '721a35cc2fa4'
>>>>>>>> ec4fa0e (added functionality in the routes to check if email already exists for the usersinteam table and to throw a 409 error if so. Team implementation is now complete):migrations/versions/721a35cc2fa4_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Team',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('User',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=250), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('Chore',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('duration', sa.Time(), nullable=False),
    sa.Column('date', sa.Date(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['User.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('UsersInTeam',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('team_name', sa.String(length=80), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['User.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('user_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('UsersInTeam')
    op.drop_table('Chore')
    op.drop_table('User')
    op.drop_table('Team')
    # ### end Alembic commands ###
